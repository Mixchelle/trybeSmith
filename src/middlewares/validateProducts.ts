import { Request, Response, NextFunction } from 'express';

function validateRequiredFields(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (!amount) {
    return res.status(400).json({ message: '"amount" is required' });
  }
  next();
}

function validateFieldsType(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  if (typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }
  next();
}

function validateFieldsLength(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (amount.length < 3) {
    return res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
  }
  next();
}

export default {
  validateRequiredFields,
  validateFieldsType,
  validateFieldsLength,
};