const db = require('../persistence');

module.exports = async (req, res) => {
    const wordOfTheDays = await db.getItemByDay(21);

    res.send(wordOfTheDays);
};