/**
 * Users - Router
 *
 * @file   users.js
 * @author Derek Diaz Correa
 * @since  7.17.2019
 */
import express from 'express';
import userController from '../controllers/users'

const userRouter = express.Router();

//Defining User Router/Endpoints
userRouter.post('/login', userController.authenticate);
userRouter.post('/register', userController.create);

export default userRouter;