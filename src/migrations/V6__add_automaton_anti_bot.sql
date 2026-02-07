-- =============================================================
-- V6__add_automaton_anti_bot.sql
-- Adds the "Automaton" word — returned when word validation
-- fails, as a playful anti-bot/scraper message.
-- =============================================================

INSERT INTO word_of_the_day (
    word, definition, pronunciation, origin,
    example0, example0_latin,
    example1, example1_latin,
    example2, example2_latin,
    synonyms, antonyms, image
) VALUES (
    'Automaton',
    'A soulless machine that wanders where it does not belong. Abandon all hope, ye who scrape here.',
    'ow-TO-ma-ton',
    'From Greek αὐτόματον — "acting of itself." Used by Romans for mechanical devices, now for those who dare enumerate our scrolls.',
    'The bot tries to enter through the gates, but in vain.',
    'Automaton per portas intrare conatur, sed frustra.',
    'Abandon all hope, ye who enumerate here.',
    'Relinquite omnem spem, vos qui hic enumeratis.',
    'Not a machine, but a soul, carries the keys.',
    'Non machina, sed anima, claves portat.',
    '{Machina,Praedo Digitalis}',
    '{Homo,Discipulus}',
    'automaton.jpg'
);
