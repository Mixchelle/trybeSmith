import express from 'express';
import productController from '../controllers/ProductController';

const router = express.Router();

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);

export default router;