import express from 'express';
import productRoutes from './routes/product';
import userRouter from './routes/user';
import OrderRouter from './routes/orders';

const app = express();

app.use(express.json());

app.use(OrderRouter);
app.use('/products', productRoutes);
app.use(userRouter);

export default app;
