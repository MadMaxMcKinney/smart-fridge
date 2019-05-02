const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// Setup the specific adapter we are using
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({
    nonPerishables: [],
    perishables: [],
}).write();

module.exports = db;
