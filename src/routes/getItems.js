const db = require('../persistence');

module.exports = async (req, res) => {
    const wordOfTheDays = await db.getItems();

    res.send(wordOfTheDays);
};