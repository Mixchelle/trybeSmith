import { generateToken } from '../middlewares/AuthToken';
import { Login } from '../interfaces/Login';
import { User } from '../interfaces/User';
import userModel from '../models/User';

async function createUser(user: User): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = generateToken(newUser);
  return token;
}

async function login(user: Login): Promise<string | { message: string }> {
  const result = await userModel.getUser(user);
  if (!result || result.password !== user.password) {
    return { message: 'Username or password invalid' };
  }
  const token = generateToken({
    id: result.id, 
    username: result.username,
    vocation: '',
    level: 0,
    password: '',
  });
  return token;
}

export default {
  createUser,
  login,
};
