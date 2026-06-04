require('dotenv').config();
const path = require('path');
const express = require('express');
const { getDb } = require('./db');
const { ensureDir, UPLOADS_ROOT } = require('./utils/files');
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const PORT = process.env.PORT || 3000;
const ROOT = path.join(__dirname, '..');

getDb();
ensureDir(UPLOADS_ROOT);
ensureDir(path.join(UPLOADS_ROOT, 'posts'));

const app = express();

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));

app.use('/uploads', express.static(UPLOADS_ROOT));

app.get('/api/health', (req, res) => {
    res.json({ ok: true, database: 'sqlite' });
});

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

app.use(express.static(ROOT));

app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api') || req.path.startsWith('/uploads')) {
        return next();
    }
    const file = path.join(ROOT, req.path === '/' ? 'index.html' : req.path);
    if (file.endsWith('.html') || !path.extname(req.path)) {
        const htmlPath = file.endsWith('.html') ? file : path.join(ROOT, req.path + '.html');
        return res.sendFile(htmlPath, (err) => {
            if (err) res.sendFile(path.join(ROOT, 'index.html'));
        });
    }
    next();
});

app.listen(PORT, () => {
    console.log(`Commune Bni Chegdale — http://localhost:${PORT}`);
    console.log(`API: http://localhost:${PORT}/api/health`);
    console.log(`Admin: http://localhost:${PORT}/admin.html`);
});
