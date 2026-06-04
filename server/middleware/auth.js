const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-production';

function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}

function requireAuth(req, res, next) {
    const header = req.headers.authorization || '';
    const token = header.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
        return res.status(401).json({ error: 'Authentification requise' });
    }

    try {
        req.admin = verifyToken(token);
        next();
    } catch {
        return res.status(401).json({ error: 'Session expirée ou invalide' });
    }
}

module.exports = { signToken, verifyToken, requireAuth, JWT_SECRET };
