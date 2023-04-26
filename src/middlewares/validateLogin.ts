import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { Login } from '../interfaces/Login';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

function validateLogin(req: Request, res: Response, next: NextFunction) {
  const loginObject = req.body as Login;
  const { error } = loginSchema.validate(loginObject);
  if (error) {
    return res.status(400).json({ message: error.message, status: 400 });
  }
  return next();
}

export default validateLogin;
