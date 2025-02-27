const db = require('../persistence');

module.exports = async (req, res) => {
    const items = await db.getItems();

    const wordOfTheDay = {
        id: 1,
        word: 'canis',
        definition: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.',
        pronunciation: 'ˈkaː.nis',
        origin: 'Latin, meaning dog.',
        example: 'The canis is a loyal companion to humans.',
        synonyms: ['dog', 'hound', 'pooch'],
        antonyms: ['cat', 'feline']
    };

    res.send(wordOfTheDay);
};
