import { Product } from '../interfaces/Product';
import productModel from '../models/ProductModel';

async function createProduct(product: Product): Promise<Product | { message: string }> {
  const newProduct = await productModel.createProduct(product);
  return newProduct;
}

export default {
  createProduct,
};