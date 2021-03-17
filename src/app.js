import {} from 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, this is home page');
});

export default app;
