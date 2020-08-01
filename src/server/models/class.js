const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  padavans: {type: String, required: true}
});

module.exports = mongoose.model('Class', classSchema);
