const db = require('../persistence');

async function getAutomaton() {
    return db.getItemByWordName('Automaton');
}

module.exports = async (req, res) => {
    const { id, word } = req.params;
    const rows = await db.getItem(id);

    if (!rows || rows.length === 0) {
        const fallback = await getAutomaton();
        return fallback && fallback.length > 0
            ? res.send(fallback)
            : res.status(404).send({ error: 'Item not found' });
    }

    const item = rows[0];
    if (item.word.toLowerCase() !== word.toLowerCase()) {
        const fallback = await getAutomaton();
        return fallback && fallback.length > 0
            ? res.send(fallback)
            : res.status(404).send({ error: 'Word does not match' });
    }

    res.send(rows);
};
