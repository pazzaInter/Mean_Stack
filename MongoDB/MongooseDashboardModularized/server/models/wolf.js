const mongoose = require('mongoose');
// creating schema for wolves
const WolfSchema = new mongoose.Schema({
  name: { type: String, required: true},
  age: Number,
  gender: String,
  alpha: Boolean,
}, {
  timestamps: true
});
// setting our model and assigning to Wolf
const Wolf = mongoose.model('Wolf', WolfSchema);
