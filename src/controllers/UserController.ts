import { Request, Response } from 'express';
import UserService from '../services/UserService';

async function createUser(req: Request, res: Response) {
  try {
    const token = await UserService.createUser(req.body);
    return res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

async function login(req: Request, res: Response) {
  try {
    const { username, password } = req.body;
    const userlogin = { username, password };
    const token = await UserService.login(userlogin);
    if (typeof token !== 'string') {
      return res.status(401).json({ message: token.message });
    }
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: `O erro é ${error}` });
  }
}

export default {
  createUser,
  login,
};