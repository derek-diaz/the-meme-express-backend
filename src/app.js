import express from 'express';
import mongoose from './config/database';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
/**
 * Main App
 *
 * @file   app.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import {PORT} from './constants'

//Routing Import
import userRoutes from './routes/user';
import giphyRoutes from './routes/giphy';

const app = express();

//Bind Mongoose Errors
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

//Setup Express
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cors());

//Setup Secret key.....in plain text... :|
app.set('secretKey', 'sadSuperSecretKey');

//Setup Routes
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/giphy', validation, giphyRoutes);
app.get('/', function (req, res) {
    res.json({"WEPA": "Server is alive and kicking!"});
});
app.get('/favicon.ico', function (req, res) {
    res.sendStatus(204);
});

//Lets verify the JWT Token
function validation(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function (err, decoded) {
        if (err) {
            res.json({status: "error", message: err.message, data: null});
        } else {
            // add user id to request
            req.body.user_id = decoded.id;
            next();
        }
    });
}

//Handle errors
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.json({error: err});
});

//Disable cors for local development purposes.
app.use(cors());

//Start Listening port
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`SHOO! SHOO! The Meme Express has left the station! Currently listening on port ${PORT}! Running on ${process.env.NODE_ENV}`)
    }
});