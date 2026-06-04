const express = require('express');
const bcrypt = require('bcryptjs');
const { getSetting, setSetting } = require('../db');
const { signToken, requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/login', (req, res) => {
    const { password } = req.body || {};
    if (!password) {
        return res.status(400).json({ error: 'Mot de passe requis' });
    }

    const hash = getSetting('admin_password_hash');
    if (!hash || !bcrypt.compareSync(password, hash)) {
        return res.status(401).json({ error: 'Mot de passe incorrect' });
    }

    const token = signToken({ role: 'admin' });
    res.json({ token, expiresIn: '7d' });
});

router.get('/me', requireAuth, (req, res) => {
    res.json({ ok: true, role: req.admin.role });
});

router.put('/password', requireAuth, (req, res) => {
    const { password } = req.body || {};
    if (!password || password.length < 6) {
        return res.status(400).json({ error: 'Mot de passe min. 6 caractères' });
    }
    const hash = bcrypt.hashSync(password, 10);
    setSetting('admin_password_hash', hash);
    res.json({ ok: true });
});

module.exports = router;
