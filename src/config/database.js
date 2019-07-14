import mongoose from 'mongoose';
import {URI_MONGO} from '../constants';


mongoose.connect(URI_MONGO, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

export default mongoose;