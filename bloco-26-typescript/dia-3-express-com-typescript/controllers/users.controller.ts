import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/users.service';

class UsersController {
  private usersService: UserService;

  constructor() {
    this.usersService = new UserService()
  }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.usersService.getAll();
    res.status(StatusCodes.OK).json(users);
  }
};

export default UsersController;