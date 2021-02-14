const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memeSchema = new Schema({
  username: { type: String, required: true },
  caption: { type: String, required: true },
  memeUrl: { type: String, required: true },
}, {
  timestamps: true,
});

const Meme = mongoose.model('Meme', memeSchema);

module.exports = Meme;