/**
 * Users - Model
 *
 * @file   users.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {SALT_ROUNDS} from '../constants';

//Defining Giphy Schema
let userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
});

//Hook that runs every time we try so save a new user into MongoDB
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    next();
});

export default mongoose.model('User', userSchema);


  