import mongoose from 'mongoose';

let giphySchema = new mongoose.Schema({
    user_id: {
      type: String,
      required: true,
      trim: true
    },
    giphy_id: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  });

module.exports = mongoose.model('Giphy', giphySchema);