const jwt = require('jsonwebtoken');
const { getSecret, readEnv } = require('../middleware/auth');

module.exports = async (req, res) => {
    const expectedUsername = readEnv('ADMIN_USERNAME') || 'admin';
    const expectedPassword = readEnv('ADMIN_PASSWORD');

    if (!expectedPassword) {
        return res
            .status(503)
            .json({ error: 'Admin login not configured' });
    }

    const { username, password } = req.body;

    if (username === expectedUsername && password === expectedPassword) {
        const token = jwt.sign(
            { username, role: 'admin' },
            getSecret(),
            { expiresIn: '24h' },
        );
        return res.json({ token });
    }

    return res.status(401).json({ error: 'Invalid credentials' });
};
