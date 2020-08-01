const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newthemaSchema = new Schema({
  themes: { type: String, required: true },
  parts: { type: Array }
});

module.exports = mongoose.model('Thema', newthemaSchema);
