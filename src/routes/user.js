import express from 'express';
import userController from '../controllers/users'

const userRouter = express.Router();

userRouter.post('/login', userController.authenticate);
userRouter.post('/register', userController.create);

export default userRouter;