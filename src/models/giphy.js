import mongoose from 'mongoose';
import userRouter from "../routes/user";

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