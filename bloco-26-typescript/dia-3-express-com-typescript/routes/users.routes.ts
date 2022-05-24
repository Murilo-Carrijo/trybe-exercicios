import { Router } from 'express';
import UsersController from '../controllers/users.controller';
import Validate from '../middleware/users.middleware';

const router = Router();
const usersController = new UsersController;

router.get('/users', usersController.getAll);

router.get('/users/:id', usersController.getById);

router.post('/users',
  Validate.validateName,
  Validate.validateEmail,
  Validate.validatePassworld,
  usersController.add);

router.put('/users/:id',
  Validate.validateName,
  Validate.validateEmail,
  Validate.validatePassworld,
  usersController.update);

router.delete('/users/:id', usersController.exclude);


export default router;