import { generateToken } from '../middlewares/AuthToken';
import { Login } from '../interfaces/Login';
import { User } from '../interfaces/User';
import userModel from '../models/User';

async function createUser(user: User): Promise<string> {
  const newUser = await userModel.createUser(user);
  const token = generateToken(newUser);
  return token;
}

async function login(user: Login): Promise<string | { message: string, status: number }> {
  const data = await userModel.getUser(user);
  if (!data || data.password !== user.password) {
    return { message: 'Username or password invalid', status: 401 };
  }
  const token = generateToken({
    id: data.id,
    username: data.username,
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
