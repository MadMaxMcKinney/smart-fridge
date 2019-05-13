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

// On a put request, add the new itme to the correct category (perishables, nonPerishables), with the title, expDate, id.
// If the category doesn't match the existing ones, return a 404.
app.put('/food', (req, res, next) => {
    const { title, expDate, category } = req.query;

    if (category === 'perishables') {
        db.get('perishables')
            .push({
                title: title,
                expDate: expDate,
                category: category,
                id: nanoid(11),
            })
            .write();
        res.send(`Successfully added: ${title} in ${category}`);
    } else if (category === 'nonPerishables') {
        db.get('nonPerishables')
            .push({
                title: title,
                expDate: expDate,
                category: category,
                id: nanoid(11),
            })
            .write();
        res.sendStatus(200);
        res.send(`Successfully added: ${title} in ${category}`);
    } else {
        res.status(404).send(
            `404 Error: Could not add item ${title} because ${category} category does not exist`
        );
    }
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
