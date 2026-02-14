const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./persistence');
const authMiddleware = require('./middleware/auth');
const getItems = require('./routes/getItems');
const getItemDaily = require('./routes/getDailyItem');
const getItemRandom = require('./routes/getRandomItem');
const addItem = require('./routes/addItem');
const addItems = require('./routes/addItems');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');
const getItem = require('./routes/getItem');
const getItemByWord = require('./routes/getItemByWord');
const login = require('./routes/login');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Public read endpoints
app.get('/items', getItems);
app.get('/items/daily', getItemDaily);
app.get('/items/random', getItemRandom);
app.get('/items/:id/:word', getItemByWord);
app.get('/items/:id', getItem);

// Auth endpoint
app.post('/auth/login', login);

// Protected write endpoints
app.post('/items', authMiddleware, addItem);
app.post('/items/batch', authMiddleware, addItems);
app.put('/items/:id', authMiddleware, updateItem);
app.delete('/items/:id', authMiddleware, deleteItem);

module.exports = app;

if (require.main === module) {
    db.init()
        .then(() => {
            app.listen(port, () => console.log('Listening on port:' + port));
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });

    const gracefulShutdown = () => {
        db.teardown()
            .catch(() => {})
            .then(() => process.exit());
    };

    process.on('SIGINT', gracefulShutdown);
    process.on('SIGTERM', gracefulShutdown);
    process.on('SIGUSR2', gracefulShutdown); // Sent by nodemon
}
