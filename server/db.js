const fs = require('fs');
const path = require('path');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DB_PATH = process.env.DATABASE_PATH || path.join(DATA_DIR, 'commune.db');
const SCHEMA_PATH = path.join(__dirname, 'schema.sql');

let db;

function getDb() {
    if (!db) {
        if (!fs.existsSync(DATA_DIR)) {
            fs.mkdirSync(DATA_DIR, { recursive: true });
        }
        db = new Database(DB_PATH);
        db.pragma('journal_mode = WAL');
        db.pragma('foreign_keys = ON');
        initSchema();
    }
    return db;
}

function initSchema() {
    const schema = fs.readFileSync(SCHEMA_PATH, 'utf8');
    db.exec(schema);

    const row = db.prepare('SELECT value FROM settings WHERE key = ?').get('admin_password_hash');
    if (!row) {
        const password = process.env.ADMIN_PASSWORD || 'bnichegdale2025';
        const hash = bcrypt.hashSync(password, 10);
        db.prepare('INSERT INTO settings (key, value) VALUES (?, ?)').run('admin_password_hash', hash);
    }
}

function getSetting(key) {
    const row = getDb().prepare('SELECT value FROM settings WHERE key = ?').get(key);
    return row ? row.value : null;
}

function setSetting(key, value) {
    getDb().prepare(`
        INSERT INTO settings (key, value) VALUES (?, ?)
        ON CONFLICT(key) DO UPDATE SET value = excluded.value
    `).run(key, value);
}

function rowToPost(row, imagePaths) {
    return {
        id: row.id,
        title: { ar: row.title_ar, fr: row.title_fr, en: row.title_en },
        content: { ar: row.content_ar, fr: row.content_fr, en: row.content_en },
        category: row.category,
        date: row.post_date,
        images: imagePaths || [],
        pdf: row.pdf_path || null,
        pdfName: row.pdf_name || null,
        createdAt: row.created_at
    };
}

module.exports = {
    getDb,
    getSetting,
    setSetting,
    rowToPost,
    DB_PATH,
    DATA_DIR
};
