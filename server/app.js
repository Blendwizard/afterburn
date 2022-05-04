const express = require('express');
const app = express();
const path = require('path');

// Parse json payloads
app.use(express.json)

// Require router object
const router = require('./routes');

app.use(express.static(path.join(__dirname, './public')))

// Use router to direct requests
app.use('/', router);


module.exports = app;
