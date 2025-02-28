const db = require('../persistence');

module.exports = async (req, res) => {
    // const items = await db.getItems();

    const wordOfTheDay = {
        id: 1,
        word: 'canis',
        definition: 'A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.',
        pronunciation: 'ˈkaː.nis',
        origin: 'Latin, meaning dog.',
        example0: 'The dog is a loyal friend',
        example0Latin: 'Canis est amicus fidelis.',
        example1: 'The dog runs in the field.',
        example1Latin: 'Canis in agro currit.',
        example2: 'The dog loves its owner.',
        example2Latin: 'Canis dominum suum amat',
        synonyms: ['dog', 'hound', 'pooch'],
        antonyms: ['cat', 'feline'],
        image: 'dog.jpg'
    };

    res.send(wordOfTheDay);
};