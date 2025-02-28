const db = require('../persistence');

module.exports = async (req, res) => {
    const wordOfTheDay = {
        id: Math.floor(Math.random() * 1000000),
        word: req.body.word,
        definition: req.body.definition,
        pronunciation: req.body.pronunciation,
        origin: req.body.origin,
        example0: req.body.example0,
        example0Latin: req.body.example0Latin,
        example1: req.body.example1,
        example1Latin: req.body.example1Latin,
        example2: req.body.example2,
        example2Latin: req.body.example2Latin,
        synonyms: req.body.synonyms,
        antonyms: req.body.antonyms,
        image: req.body.image,
    };

    await db.storeItem(wordOfTheDay);
    res.send(wordOfTheDay);
};
