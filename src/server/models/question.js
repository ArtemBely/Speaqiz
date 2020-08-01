const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questSchema = new Schema({
  title2: { type: String, required: true },
  var2: { type: String, required: true },
  var3: { type: String, required: true },
  var4: { type: String, required: true },
  var5: { type: String, required: true },
  var6: { type: String },
  var7: { type: String },
  var8: { type: String },
  var9: { type: String },
  right: { type: String, required: true },
  coverImageName: { type: String },
  audio: { type: String }
});

module.exports = mongoose.model('Question', questSchema);
