import express, { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserRoutes from './routes/users.routes';

const app = express();

app.use(express.json());

const PORT = 8000;

// app.get('/', (req: Request, res: Response) => {
//   res.status(StatusCodes.OK).send('Express + TypeScript')
// });

app.use(UserRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});