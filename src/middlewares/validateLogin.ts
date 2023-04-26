import Joi from 'joi';
import { Login } from '../interfaces/Login';

const loginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

function validateLogin(login: Login): { error?: Error, status?: number } {
  const { error } = loginSchema.validate(login);
  if (error) {
    return { error, status: 400 };
  }
  return {};
}

export default validateLogin;