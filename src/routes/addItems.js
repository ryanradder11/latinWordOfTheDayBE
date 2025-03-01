const db = require('../persistence');

module.exports = async (req, res) => {

    req.body.forEach(async (wordOfTheDay) => {
        console.log(wordOfTheDay);
        await db.storeItem(wordOfTheDay);
    });
    res.send(req.body);
};
