import express from 'express';
import productController from '../controllers/ProductController';

const productsRouter = express.Router();

productsRouter.post('/', productController.createProduct);
productsRouter.get('/', productController.getAllProducts);

export default productsRouter;