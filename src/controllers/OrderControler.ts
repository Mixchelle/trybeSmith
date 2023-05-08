import { Request, Response } from 'express';
import OrderService from '../services/OrderService';
import { Token } from '../interfaces/Token';

interface RequestWithUserRole extends Request {
  user?: Token,
}

async function getAllOrders(req: Request, res: Response) {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'internal server' });
  }
}

export interface RequestAuth extends Request {
  userId?: number | string;
}

async function createOrder(req: RequestWithUserRole, res: Response) {
  if (req.user !== undefined) {
    await OrderService.createOrder(req.body, Number(req.user.userId));
    return res
      .status(201)
      .json({ userId: Number(req.user.userId), productsIds: req.body.productsIds });
  }
}

export default {
  getAllOrders,
  createOrder,
};