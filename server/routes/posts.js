const express = require('express');
const { getDb, rowToPost } = require('../db');
const { requireAuth } = require('../middleware/auth');
const {
    generatePostId,
    savePostImages,
    savePostPdf,
    deletePostFiles
} = require('../utils/files');

const router = express.Router();

function getImagesForPost(postId) {
    return getDb()
        .prepare('SELECT file_path FROM post_images WHERE post_id = ? ORDER BY sort_order ASC')
        .all(postId)
        .map((r) => r.file_path);
}

function fetchAllPosts() {
    const rows = getDb()
        .prepare('SELECT * FROM posts ORDER BY post_date DESC, created_at DESC')
        .all();
    return rows.map((row) => rowToPost(row, getImagesForPost(row.id)));
}

router.get('/', (req, res) => {
    res.json(fetchAllPosts());
});

router.get('/:id', (req, res) => {
    const row = getDb().prepare('SELECT * FROM posts WHERE id = ?').get(req.params.id);
    if (!row) {
        return res.status(404).json({ error: 'Publication introuvable' });
    }
    res.json(rowToPost(row, getImagesForPost(row.id)));
});

router.post('/', requireAuth, (req, res) => {
    const body = req.body || {};
    const title = body.title || {};
    const content = body.content || {};

    const hasContent = ['ar', 'fr', 'en'].some(
        (l) => (title[l] || '').trim() && (content[l] || '').trim()
    );
    if (!hasContent) {
        return res.status(400).json({ error: 'Titre et contenu requis dans au moins une langue' });
    }

    const id = generatePostId();
    const createdAt = Date.now();
    const postDate = body.date || new Date().toISOString().split('T')[0];

    const imagePaths = savePostImages(id, body.images);
    const pdf = savePostPdf(id, body.pdf, body.pdfName);

    getDb().prepare(`
        INSERT INTO posts (
            id, title_ar, title_fr, title_en,
            content_ar, content_fr, content_en,
            category, post_date, pdf_path, pdf_name, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        id,
        (title.ar || '').trim(),
        (title.fr || '').trim(),
        (title.en || '').trim(),
        (content.ar || '').trim(),
        (content.fr || '').trim(),
        (content.en || '').trim(),
        body.category || 'info',
        postDate,
        pdf.path,
        pdf.name,
        createdAt
    );

    const insertImg = getDb().prepare(
        'INSERT INTO post_images (post_id, sort_order, file_path) VALUES (?, ?, ?)'
    );
    imagePaths.forEach((filePath, index) => {
        insertImg.run(id, index, filePath);
    });

    const post = rowToPost(
        getDb().prepare('SELECT * FROM posts WHERE id = ?').get(id),
        imagePaths
    );
    res.status(201).json(post);
});

router.delete('/:id', requireAuth, (req, res) => {
    const id = req.params.id;
    const result = getDb().prepare('DELETE FROM posts WHERE id = ?').run(id);
    if (result.changes === 0) {
        return res.status(404).json({ error: 'Publication introuvable' });
    }
    deletePostFiles(id);
    res.json({ ok: true });
});

module.exports = router;
