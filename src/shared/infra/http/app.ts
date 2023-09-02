import 'reflect-metadata';
import 'dotenv/config';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import '../../container';
import '../database';
import AppError from '../error/AppError';
import router from './route';

const app = express();

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
  
    console.error(err);
  
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});  

app.use(cors());
app.use(express.json());
app.use('/api', router);

export default app;
