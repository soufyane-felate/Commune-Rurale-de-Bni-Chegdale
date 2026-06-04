const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const UPLOADS_ROOT = path.join(__dirname, '..', '..', 'uploads');

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
}

function parseDataUrl(dataUrl) {
    if (!dataUrl || typeof dataUrl !== 'string' || !dataUrl.startsWith('data:')) {
        return null;
    }
    const match = dataUrl.match(/^data:([^;]+);base64,(.+)$/);
    if (!match) return null;
    return {
        mime: match[1],
        buffer: Buffer.from(match[2], 'base64')
    };
}

function extFromMime(mime) {
    const map = {
        'image/jpeg': '.jpg',
        'image/jpg': '.jpg',
        'image/png': '.png',
        'image/webp': '.webp',
        'image/gif': '.gif',
        'application/pdf': '.pdf'
    };
    return map[mime] || '.bin';
}

function saveDataUrl(dataUrl, subdir, basename) {
    const parsed = parseDataUrl(dataUrl);
    if (!parsed) return null;

    const dir = path.join(UPLOADS_ROOT, subdir);
    ensureDir(dir);

    const ext = extFromMime(parsed.mime);
    const filename = `${basename}${ext}`;
    const fullPath = path.join(dir, filename);
    fs.writeFileSync(fullPath, parsed.buffer);

    return `/uploads/${subdir.replace(/\\/g, '/')}/${filename}`;
}

function savePostImages(postId, images) {
    if (!Array.isArray(images)) return [];
    const saved = [];
    images.slice(0, 10).forEach((dataUrl, index) => {
        const url = saveDataUrl(dataUrl, `posts/${postId}`, String(index));
        if (url) saved.push(url);
    });
    return saved;
}

function savePostPdf(postId, dataUrl, pdfName) {
    if (!dataUrl) return { path: null, name: pdfName || null };
    const base = path.basename(pdfName || 'document', path.extname(pdfName || '')) || 'document';
    const safe = base.replace(/[^a-zA-Z0-9._-]/g, '_').slice(0, 80);
    const url = saveDataUrl(dataUrl, `posts/${postId}`, safe);
    return { path: url, name: pdfName || 'document.pdf' };
}

function deletePostFiles(postId) {
    const dir = path.join(UPLOADS_ROOT, 'posts', postId);
    if (fs.existsSync(dir)) {
        fs.rmSync(dir, { recursive: true, force: true });
    }
}

function generatePostId() {
    return `post_${Date.now()}_${crypto.randomBytes(4).toString('hex')}`;
}

module.exports = {
    UPLOADS_ROOT,
    ensureDir,
    savePostImages,
    savePostPdf,
    deletePostFiles,
    generatePostId
};
