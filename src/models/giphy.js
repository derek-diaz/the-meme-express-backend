import mongoose from 'mongoose';

let giphySchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true
    },
    gif_id: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('Giphy', giphySchema);