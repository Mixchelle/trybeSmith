import { Router } from 'express';
import userController from '../controllers/UserController';
import validate from '../middlewares/validateLogin';

const userRouter = Router();
userRouter.post('/users', userController.createUser);
userRouter.post('/login', validate, userController.login);

export default userRouter;