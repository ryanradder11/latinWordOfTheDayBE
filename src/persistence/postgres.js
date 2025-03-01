const waitPort = require('wait-port');
const fs = require('fs');
const { Client } = require('pg');

const {
    POSTGRES_HOST: HOST,
    POSTGRES_HOST_FILE: HOST_FILE,
    POSTGRES_USER: USER,
    POSTGRES_USER_FILE: USER_FILE,
    POSTGRES_PASSWORD: PASSWORD,
    POSTGRES_PASSWORD_FILE: PASSWORD_FILE,
    POSTGRES_DB: DB,
    POSTGRES_DB_FILE: DB_FILE,
} = process.env;

let client;

async function init() {
    const host = HOST_FILE ? fs.readFileSync(HOST_FILE) : HOST;
    console.log('host:', host);
    const user = USER_FILE ? fs.readFileSync(USER_FILE) : USER;
    console.log('user:', user);
    const password = PASSWORD_FILE
        ? fs.readFileSync(PASSWORD_FILE, 'utf8')
        : PASSWORD;
    console.log('password:', password);
    const database = DB_FILE ? fs.readFileSync(DB_FILE) : DB;
    console.log('database:', database);

    await waitPort({
        host,
        port: 5432,
        timeout: 10000,
        waitForDns: true,
    });

    client = new Client({
        host,
        user,
        password,
        database,
    });

    return client
        .connect()
        .then(async () => {
            console.log(`Connected to postgres db at host ${HOST}`);
            // Run the SQL instruction to create the table if it does not exist
            await client.query(
                `CREATE TABLE IF NOT EXISTS word_of_the_day (
                    id SERIAL PRIMARY KEY,
                    word VARCHAR(255) NOT NULL,
                    definition TEXT NOT NULL,
                    pronunciation VARCHAR(255),
                    origin VARCHAR(255),
                    example0 TEXT,
                    example0_latin TEXT,
                    example1 TEXT,
                    example1_latin TEXT,
                    example2 TEXT,
                    example2_latin TEXT,
                    synonyms TEXT[],
                    antonyms TEXT[],
                    image VARCHAR(255)
                    );`,
            );
            console.log(
                'Connected to db and created table todo_items if it did not exist',
            );
        })
        .catch((err) => {
            console.error('Unable to connect to the database:', err);
        });
}

// Get all items from the table
async function getItems() {
        return client
            .query('SELECT * FROM word_of_the_day')
            .then((res) => {
                const items = res.rows;
                if (items.length === 0) {
                    return null;
                }
                const randomIndex = Math.floor(Math.random() * items.length);
                return [items[randomIndex]];
            })
            .catch((err) => {
                console.error('Unable to get items:', err);
            });
}

// End the connection
async function teardown() {
    return client
        .end()
        .then(() => {
            console.log('Client ended');
        })
        .catch((err) => {
            console.error('Unable to end client:', err);
        });
}

// Get one item by id from the table
async function getItem(id) {
    console.log('id:', id);
    return client
        .query('SELECT * FROM word_of_the_day WHERE id = $1', [id])
        .then((res) => {
            return res.rows
        })
        .catch((err) => {
            console.error('Unable to get item:', err.message);
        });
}

// Store one item in the table
async function storeItem(item) {
    return client
        .query(
            `INSERT INTO word_of_the_day(
                word, definition, pronunciation, origin, example0, example0_latin, 
                example1, example1_latin, example2, example2_latin, synonyms, antonyms, image
            ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
            [
                item.word, item.definition, item.pronunciation, item.origin,
                item.example0, item.example0Latin, item.example1, item.example1Latin,
                item.example2, item.example2Latin, item.synonyms, item.antonyms, item.image
            ]
        )
        .then(() => {
            console.log('Stored item:', item);
        })
        .catch((err) => {
            console.error('Unable to store item:', err);
        });
}// Update one item by id in the table
async function updateItem(id, item) {
    return client
        .query(
            `UPDATE word_of_the_day SET 
                word = $1, definition = $2, pronunciation = $3, origin = $4, 
                example0 = $5, example0_latin = $6, example1 = $7, example1_latin = $8, 
                example2 = $9, example2_latin = $10, synonyms = $11, antonyms = $12, image = $13 
            WHERE id = $14`,
            [
                item.word, item.definition, item.pronunciation, item.origin,
                item.example0, item.example0Latin, item.example1, item.example1Latin,
                item.example2, item.example2Latin, item.synonyms, item.antonyms, item.image, id
            ]
        )
        .then(() => {
            console.log('Updated item:', item);
        })
        .catch((err) => {
            console.error('Unable to update item:', err);
        });
}

// Remove one item by id from the table
async function removeItem(id) {
    return client
        .query('DELETE FROM word_of_the_day WHERE id = $1', [id])
        .then(() => {
            console.log('Removed item:', id);
        })
        .catch((err) => {
            console.error('Unable to remove item:', err);
        });
}

module.exports = {
    init,
    teardown,
    getItems,
    getItem,
    storeItem,
    updateItem,
    removeItem,
};
