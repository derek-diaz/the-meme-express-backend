import userModel from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

let _ = require('lodash');

function create(req, res, next) {
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

function authenticate(req, res, next) {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    console.log("body", req.body);

    if (_.isNil(req.body.email) || _.isNil(req.body.password)) {
        next("Invalid payload");
    } else {
        userModel.findOne({email: req.body.email}, function (err, userInfo) {
            if (err || _.isNil(userInfo)) {
                next(err);
            } else {
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