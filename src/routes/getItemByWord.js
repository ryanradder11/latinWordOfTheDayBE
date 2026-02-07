const db = require('../persistence');

module.exports = async (req, res) => {
    const { id, word } = req.params;
    const rows = await db.getItem(id);

    if (!rows || rows.length === 0) {
        return res.status(404).send({ error: 'Item not found' });
    }

    const item = rows[0];
    if (item.word.toLowerCase() !== word.toLowerCase()) {
        return res.status(404).send({ error: 'Word does not match' });
    }

    res.send(rows);
};
