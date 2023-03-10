import { AppError } from '../../errors/AppError';
import createConnection from '../typeorm';
import '../../container';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        message: err.message,
      });
    }

    return response.status(500).json({
      status: 'Error',
      message: `Internal Server Error - ${err.message}`,
    });
  },
);

app.listen(3333, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running!');
});
