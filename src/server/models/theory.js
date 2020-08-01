const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const theorySchema = new Schema({
  theo: { type: String, required: true }
});

module.exports = mongoose.model('Theory', theorySchema);
