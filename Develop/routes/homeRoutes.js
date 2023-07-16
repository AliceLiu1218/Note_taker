// const path = require("path")

// ("/") => show indexedDB.html

// ("/notes") => show notes.html

const home = require('express').Router();

const path = require('path');
//app.use(express.static('public'));

home.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

home.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);


module.exports = home;