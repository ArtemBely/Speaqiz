const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var partSchema =  new Schema({
  parts: { type: Array },
  title: { type: String, required: true },
  theory: { type: Array }
});

module.exports = mongoose.model('Part', partSchema);
