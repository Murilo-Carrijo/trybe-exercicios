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

  public add = async (req: Request, res: Response) => {
    const dataNewUser = req.body;
    const newUser = await this.usersService.add(dataNewUser);
    if (newUser === false)  return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Email já cadastrado'});
    return res.status(StatusCodes.CREATED).json(newUser);
  }

  public update = async (req: Request, res: Response) =>{
    const dataUpdateUser = req.body;
    const id = Number(req.params.id);
    const newUser = await this.usersService.update(id, dataUpdateUser);
    if (newUser === false) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    } 
    return res.status(StatusCodes.CREATED).json(newUser);
  }

  public exclude = async (req: Request, res: Response) =>{
    const id = Number(req.params.id);
    const exUser = await this.usersService.exclude(id);
    if (exUser === false) return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
    return res.status(StatusCodes.OK).json({ message: 'Usuario excluido com sucesso'});
  }
};

export default UsersController;