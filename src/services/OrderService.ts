import { Order } from '../interfaces/Order';
import OrderModel from '../models/Order';

async function getAllOrders(): Promise<Order[]> {
  const orders = await OrderModel.getAllOrders();
  return orders;
}
export default { getAllOrders };