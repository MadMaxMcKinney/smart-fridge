const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;

const nanoid = require('nanoid');

const db = require('./db');

// Setup express to support serving static content from this directory.
// This makes sure everything in that directory is included in the server.
app.use(express.static('../frontend/public'));

// Enable cors. Even though this app is running on localhost chrome based browsers don't allow cors on localhost.
// Our backend and frontend run on different ports thus we need to enable cors.
app.use(cors());

// Return the whole database
app.get('/food', (req, res, next) => {
    res.json(db.value());
});

// On a put request, add the new itme to the correct category, with the title, expDate, id.
app.put('/food', (req, res, next) => {
    res.json(req.query);

    db.get('food')
        .push({
            title: req.query.title,
            expDate: req.query.expDate,
            category: req.query.category,
            id: nanoid(11),
        })
        .write();
});

// Delete the food item with the given id
app.delete('/food', (req, res, next) => {
    res.send(`Deleted item with id: ${req.query.id}`);
    db.get('food')
        .remove({
            id: req.query.id,
        })
        .write();
});

// To the server to listen on port 8080.
app.listen(port, () => {
    console.log('💻 Express server running at http://localhost:8080 ');
});
