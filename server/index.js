const express = require('express');
const app = express();
const path = require('path');

// Parse json payloads
app.use(express.json())

// Require router object
const router = require('./routes');

app.use(express.static('/Users/joevancamp/hackreactor/MVC/afterburn/public'));

// Use router to direct requests
app.use('/', router);

const PORT = 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
