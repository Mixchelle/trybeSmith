import { Router } from 'express';
import OrderController from '../controllers/OrderControler';

const OrderRouter = Router();

OrderRouter.get('/orders', OrderController.getAllOrders);

export default OrderRouter;