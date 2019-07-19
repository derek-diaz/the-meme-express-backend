/**
 * Users - Controller
 *
 * @file   users.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import userModel from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

/**
 * Create a new user
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function create(req, res, next) {
    //Lets make sure the payload is valid
    if (_.isNil(req.body.email) || _.isNil(req.body.password)|| _.isNil(req.body.name)) {
        next("Invalid payload");
    } else {
        userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }, function (err, result) {
            if (err) {
                console.log("USER CREATE " + err);
                next(err);
            }
            else
                res.json({status: "success", data: null});

        });
    }
}

/**
 * Authenticate User
 * @param req - Service Request
 * @param res - Service Response
 * @param next - Node Control Flow Callback
 */
function authenticate(req, res, next) {
    //Lets make sure the payload is valid
    if (_.isNil(req.body.email) || _.isNil(req.body.password)) {
        next("Invalid payload");
    } else {
        userModel.findOne({email: req.body.email}, function (err, userInfo) {
            if (err || _.isNil(userInfo)) {
                next(err);
            } else {
                //Checking is the password hash matches
                if (bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '1h'});
                    res.json({
                        status: "success",
                        data: {name: userInfo.name, email: userInfo.email, id: userInfo._id, token: token}
                    });
                } else {
                    res.json({status: "error", message: "Invalid email or password"});
                }
            }
        });
    }
}

export default {create, authenticate};