import userModel from '../models/users';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

module.exports = {
    create: function(req, res, next) {
     userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
         if (err) {
             console.log("USER CREATE " + err);
             next(err);
         }
         else
          res.json({status: "success", data: null});
         
       });
    },
   authenticate: function(req, res, next) {
        userModel.findOne({email:req.body.email}, function(err, userInfo){
            if (err) {
            next(err);
            } else {
                if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                    const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), { expiresIn: '1h' });
                    res.json({status:"success", data:{name: userInfo.name, email: userInfo.email, id: userInfo._id, token:token}});
                }else{
                    res.json({status:"error", message: "Invalid email or password"});
                }
            }
        });
    },
};