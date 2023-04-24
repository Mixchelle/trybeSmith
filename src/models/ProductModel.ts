import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { Product } from '../interfaces/Product';

async function createProduct(product: Product): Promise<Product> {
  const { name, amount } = product;

  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  const { insertId: id } = result;

  const newProduct: Product = { id, ...product };
  return newProduct;
}

async function getAllProducts(): Promise<Product[]> {
  const [result] = await connection.execute('SELECT * FROM Trybesmith.products');
  return result as Product[];
}

export default {
  createProduct,
  getAllProducts,
};