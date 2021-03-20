import {} from 'dotenv/config';
import cors from 'cors';
import express from 'express';

import userRouter from './routes/users';
import authRouter from './routes/auth';
import pictureRouter from './routes/picture';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/pictures', pictureRouter);

app.get('/', (req, res) => {
  res.send('Hello, this is home page');
});

export default app;
