import express from 'express';
import userController from '../controllers/users'

const userRouter = express.Router();


// POST method route
userRouter.post('/login', userController.authenticate);

// POST method route
userRouter.post('/register', userController.create);

// POST method route
userRouter.get('/profile', function (req, res) {
    res.send('PROFILE!')
});

module.exports = userRouter;