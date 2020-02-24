const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbUrl = require('./confidential');

mongoose.connect(dbUrl);

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());

app.post('/profile', (req, res) => {});
app.get('/profile', (req, res) => {});
app.put('/profile', (req, res) => {});

app.listen(4000);
console.log('App listening on port 4000');
