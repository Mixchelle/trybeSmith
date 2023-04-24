import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('/', ProductController.createProduct);

export default router;