import { Request, Response, NextFunction } from 'express';
import ProductService from '../services/productsService';
import { Product } from '../interfaces/Product';

class ProductController {
  static async createProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const productData: Product = req.body;
      const newProduct = await ProductService.createProduct(productData);
      res.status(201).json(newProduct);
    } catch (err) {
      next(err);
    }
  }
}

export default ProductController;
