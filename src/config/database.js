/**
 * Database - Configuration
 *
 * @file   database.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */

import mongoose from 'mongoose';
import {URI_MONGO} from '../constants';

mongoose.connect(URI_MONGO, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

export default mongoose;