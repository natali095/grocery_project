import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { connect, ConnectOptions } from 'mongoose';

import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

const port = 5000;

const dbConnect = () => {
  connect(process.env.MONGO_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));
};

dbConnect();

app.listen(port, () => {
  console.log('Website served on http://localhost:' + port);
});