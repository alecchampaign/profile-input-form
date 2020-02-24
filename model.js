const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: String,
  sport: String,
  nationality: String,
  gender: String,
  birthDate: String,
  description: String,
  location: String,
  team: String,
  twitter: String,
  facebook: String,
  instagram: String
});

module.exports.Profile = mongoose.model('Profile', profileSchema);
