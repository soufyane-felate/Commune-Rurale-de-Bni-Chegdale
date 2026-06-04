/**
 * Migre les publications localStorage vers la base SQLite.
 * Usage: node server/scripts/migrate-local.js chemin/vers/export.json
 * Ou collez les posts JSON depuis la console navigateur:
 *   copy(localStorage.getItem('commune_posts'))
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { getDb, rowToPost } = require('../db');
const { generatePostId, savePostImages, savePostPdf } = require('../utils/files');

const input = process.argv[2];
if (!input) {
    console.log('Usage: node server/scripts/migrate-local.js posts.json');
    process.exit(1);
}

const raw = fs.readFileSync(path.resolve(input), 'utf8');
const posts = JSON.parse(raw);
const db = getDb();

let count = 0;
for (const p of posts) {
    const id = p.id || generatePostId();
    const images = p.images || (p.image ? [p.image] : []);
    const imagePaths = savePostImages(id, images);
    const pdf = savePostPdf(id, p.pdf, p.pdfName);

    db.prepare(`
        INSERT OR REPLACE INTO posts (
            id, title_ar, title_fr, title_en,
            content_ar, content_fr, content_en,
            category, post_date, pdf_path, pdf_name, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
        id,
        (p.title?.ar || '').trim(),
        (p.title?.fr || '').trim(),
        (p.title?.en || '').trim(),
        (p.content?.ar || '').trim(),
        (p.content?.fr || '').trim(),
        (p.content?.en || '').trim(),
        p.category || 'info',
        p.date || new Date().toISOString().split('T')[0],
        pdf.path,
        pdf.name,
        p.createdAt || Date.now()
    );

    db.prepare('DELETE FROM post_images WHERE post_id = ?').run(id);
    const ins = db.prepare('INSERT INTO post_images (post_id, sort_order, file_path) VALUES (?, ?, ?)');
    imagePaths.forEach((fp, i) => ins.run(id, i, fp));
    count++;
}

console.log(`Migré ${count} publication(s) vers la base de données.`);
