import { Request, Response, NextFunction } from 'express';
import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/User';
import { Token } from '../interfaces/Token';

const secret = process.env.JWT_SECRET;

const jwtConfig: SignOptions = {
  expiresIn: '3d',
  algorithm: 'HS256',
};

const generateToken = (payload: User): string => {
  const token = jwt.sign(payload, secret as string, jwtConfig);
  return token;
};

interface RequestWithUser extends Request {
  user?: Token,
}

const verifyToken = (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const token: string | undefined = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const decoded = <Token> jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export { generateToken, verifyToken };
