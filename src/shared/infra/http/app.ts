import 'dotenv/config';
import '../../container';
import '../database';
import express, { Request, Response, NextFunction } from 'express';
import AppError from '../error/AppError';

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

app.use(express.json());

export default app;
