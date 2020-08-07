const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lockedschema = new Schema({
  name: {type: String, required: true},
  date: {type: Number, required: true}
});

module.exports = mongoose.model('Block', lockedschema);
