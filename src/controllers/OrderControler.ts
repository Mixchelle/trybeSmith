import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

async function getAllOrders(req: Request, res: Response) {
  try {
    const orders = await OrderService.getAllOrders();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'internal server' });
  }
}

export default {
  getAllOrders,
};