import { Router } from 'express';
import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController;

router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.getById);
router.post('/users', usersController.add);


export default router;