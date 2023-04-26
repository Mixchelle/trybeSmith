import express from 'express';
import productController from '../controllers/ProductController';
import v from '../middlewares/validateProducts';

const productsRouter = express.Router();

productsRouter.post(
  '/', 
  v.validateRequiredFields, 
  v.validateFieldsType,
  v.validateFieldsLength,
  productController.createProduct,
);

productsRouter.get('/', productController.getAllProducts);

export default productsRouter;