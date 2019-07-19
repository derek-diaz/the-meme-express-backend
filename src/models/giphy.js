/**
 * Giphy - Model
 *
 * @file   giphy.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import mongoose from 'mongoose';

//Defining Giphy Schema
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

export default mongoose.model('Giphy', giphySchema);