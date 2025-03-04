const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const db = require('./persistence');
const getItems = require('./routes/getItems');
const getItemDaily = require('./routes/getDailyItem');
const getItemRandom = require('./routes/getRandomItem');
const addItem = require('./routes/addItem');
const addItems  = require('./routes/addItems');
const updateItem = require('./routes/updateItem');
const deleteItem = require('./routes/deleteItem');
const getItem = require("./routes/getItem");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname + '/static'));
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'static')));


app.get('/items', getItems);
app.get('/items/daily', getItemDaily);
app.get('/items/random', getItemRandom);
app.get('/items/:id', getItem);
app.post('/items', addItem);
app.post('/items/batch', addItems);
app.put('/items/:id', updateItem);
app.delete('/items/:id', deleteItem);

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
