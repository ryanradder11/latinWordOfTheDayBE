const fs = require('fs');
const jwt = require('jsonwebtoken');

function readEnv(name) {
    const fileVal = process.env[`${name}_FILE`];
    if (fileVal) {
        try {
            return fs.readFileSync(fileVal, 'utf8').trim();
        } catch (e) {
            console.error(`Failed to read ${name}_FILE:`, e.message);
        }
    }
    return process.env[name] || '';
}

function getSecret() {
    return readEnv('JWT_SECRET') || 'latin-word-of-the-day-default-secret';
}

function getApiKey() {
    return readEnv('ADMIN_API_KEY');
}

function authMiddleware(req, res, next) {
    // Check for API key (for generate script compatibility)
    const apiKey = req.headers['x-api-key'];
    const expectedApiKey = getApiKey();
    if (expectedApiKey && apiKey === expectedApiKey) {
        return next();
    }

    // Check for JWT Bearer token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authentication required' });
    }

    const token = authHeader.split(' ')[1];
    try {
        req.user = jwt.verify(token, getSecret());
        next();
    } catch (err) {
        return res.status(401).json({ error: 'Invalid or expired token' });
    }
}

module.exports = authMiddleware;
module.exports.getSecret = getSecret;
module.exports.readEnv = readEnv;
