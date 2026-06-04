-- Commune Rurale de Bni Chegdale — schéma SQLite

CREATE TABLE IF NOT EXISTS posts (
    id TEXT PRIMARY KEY,
    title_ar TEXT NOT NULL DEFAULT '',
    title_fr TEXT NOT NULL DEFAULT '',
    title_en TEXT NOT NULL DEFAULT '',
    content_ar TEXT NOT NULL DEFAULT '',
    content_fr TEXT NOT NULL DEFAULT '',
    content_en TEXT NOT NULL DEFAULT '',
    category TEXT NOT NULL DEFAULT 'info',
    post_date TEXT NOT NULL,
    pdf_path TEXT,
    pdf_name TEXT,
    created_at INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS post_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id TEXT NOT NULL,
    sort_order INTEGER NOT NULL DEFAULT 0,
    file_path TEXT NOT NULL,
    FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE
);

CREATE INDEX IF NOT EXISTS idx_post_images_post ON post_images(post_id);
CREATE INDEX IF NOT EXISTS idx_posts_date ON posts(post_date DESC);

CREATE TABLE IF NOT EXISTS settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
);
