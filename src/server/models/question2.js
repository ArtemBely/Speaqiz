const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quest2Schema = new Schema({
  title2: { type: String, required: true },
  var2: { type: String, required: true },
  right: { type: String, required: true },
  coverImageName: { type: String },
  audio: { type: String }
});

module.exports = mongoose.model('Question2', quest2Schema);
