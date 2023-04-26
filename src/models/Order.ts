import { Order } from '../interfaces/Order';
import connection from './connection';

async function getAllOrders(): Promise<Order[]> {
  const query = `SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds 
  FROM Trybesmith.orders AS o 
  INNER JOIN Trybesmith.products AS p ON o.id = p.order_id
  GROUP BY o.id`;
  const [orders] = await connection.execute(query);
  return orders as Order[];
}

export default {
  getAllOrders,
};
