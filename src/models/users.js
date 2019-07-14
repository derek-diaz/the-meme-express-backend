import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from '../constants';

//TODO: needs more fields!
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

  userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, SALT_ROUNDS);
    next();
  });

  module.exports = mongoose.model('User', userSchema);


  