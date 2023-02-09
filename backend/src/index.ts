import express, { Express } from 'express';
import { Request,TYPES } from 'tedious';
import router from './Routers/user.router.js';
import productRouter from './Routers/product.router.js';
import orderRouter from './Routers/order.router.js';


const port: number = 3000;
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', router);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    
    
});

app.get('/', (req, res) => {
    res.send('Hello!');   
});






