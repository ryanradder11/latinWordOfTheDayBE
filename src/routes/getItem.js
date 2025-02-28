const db = require('../persistence');

module.exports = async (req, res) => {
    const wordOfTheDays = await db.getItem(req.params.id);

    res.send(wordOfTheDays);
};