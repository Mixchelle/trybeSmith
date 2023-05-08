import { Order } from '../interfaces/Order';
import OrderModel from '../models/Order';

async function getAllOrders(): Promise<Order[]> {
  const orders = await OrderModel.getAllOrders();
  return orders;
}

async function createOrder(order: { productsIds: number[] }, userId: number)
  : Promise<null | { message: string }> {
  await OrderModel.createOrder(order, userId);
  return null;
}

export default { getAllOrders, createOrder };