const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const teachSchema = new Schema ({
  profilePhoto: {type: String},
  name: {type: String, required: true},
  lastname: {type: String, required: true},
  email: {type: String, required: true},
  city: {type: String, required: true},
  telephone: {type: String},
  teacher: {type: String},
  class: {type: String},
  school: {type: String},
  subject: {type: Array},
  teach: {type: String, required: true},
  padavans: {type: Array},
  themes: {type: Array},
  password: {type: String, required: true},
  scores: {type: Number},
  feedback: {type: Array},
  raiting: {type: Array},
  completed: {type: Array},
  timestamp: {type: String}, 
  bio: {type: String}
});

module.exports = mongoose.model('Teach', teachSchema);
module.exports.createUser = function(newUser, callback) {
var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
