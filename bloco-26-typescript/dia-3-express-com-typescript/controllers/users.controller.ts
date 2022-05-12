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
    return res.status(StatusCodes.OK).json(users);
  }

  public getById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user =  await this.usersService.getById(id);
    if (!user) res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    return res.status(StatusCodes.OK).json(user);
  }

  public add =async (req: Request, res: Response) => {
    const dataNewUser = req.body;
    const newUser = await this.usersService.add(dataNewUser);
    return res.status(StatusCodes.CREATED).json(newUser);
  }
};

export default UsersController;