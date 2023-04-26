import { Router } from 'express';
import userController from '../controllers/UserController';
import validateLogin from '../middlewares/validateLogin';
import v from '../middlewares/validateUser';

const userRouter = Router();
userRouter.post(
  '/users', 
  v.validateUsername,
  v.validateVocation,
  v.validateLevel,
  v.validatePassword,
  userController.createUser,
);
 
userRouter.use(validateLogin);
userRouter.post('/login', userController.login);

export default userRouter;