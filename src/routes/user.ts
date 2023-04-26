import { Router } from 'express';
import userController from '../controllers/UserController';
import validateLogin from '../middlewares/validateLogin';

const userRouter = Router();
userRouter.post('/users', userController.createUser);
userRouter.use(validateLogin);
userRouter.post('/login', userController.login);

export default userRouter;