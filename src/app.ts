import express from 'express';
import productRoutes from './routes/product';
import userRouter from './routes/user';
import orderRouter from './routes/orders';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use(userRouter);
app.use(orderRouter);

export default app;
