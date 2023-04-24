import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productsService';
import { Product } from '../interfaces/Product';

const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const productData: Product = req.body;
    const newProduct = await ProductService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

async function getAllProducts(req: Request, res: Response): Promise<void> {
  const products = await ProductService.getAllProducts();
  res.status(200).send(products);
}

export default { createProduct, getAllProducts };
