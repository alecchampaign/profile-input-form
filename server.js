const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbUrl = process.env.DBURL || require('./confidential').dbUrl;
const port = process.env.PORT || 4200;
const Profile = require('./model');
console.log('URL: ', dbUrl);

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('MongoDB connected'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization, Content-Length, X-Requested-With'
  );
  next();
});

app.post('/profile', (req, res) => {
  console.log('Received request');
  const profile = new Profile({
    name: req.body.basicInfo.name,
    sport: req.body.basicInfo.sport,
    nationality: req.body.basicInfo.nationality,
    gender: req.body.basicInfo.gender,
    birthDate: req.body.basicInfo.birthDate,
    description: req.body.aboutInfo.description,
    location: req.body.aboutInfo.location,
    team: req.body.aboutInfo.team,
    twitter: req.body.socialInfo.twitter,
    facebook: req.body.socialInfo.facebook,
    instagram: req.body.socialInfo.instagram
  });
  profile.save(err => console.error(err));
  res.sendStatus(201);
});

app.get('/profile', (req, res) => {});

app.put('/profile', (req, res) => {});

app.listen(port, err => console.log('App listening on port ' + port));
