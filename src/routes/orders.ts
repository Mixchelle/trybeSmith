import { Router } from 'express';
import OrderController from '../controllers/OrderControler';
import { verifyToken } from '../middlewares/AuthToken';
import validateCreateOrder from '../middlewares/validateOrders';

const OrderRouter = Router();

OrderRouter.get('/orders', OrderController.getAllOrders);

OrderRouter.post(
  '/orders',
  verifyToken,
  validateCreateOrder,
  OrderController.createOrder,
);

export default OrderRouter;