import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/users.interface';

class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<User> {
    const user = await this.model.getById(id);
    return user;
  }

  public async add(user: User): Promise<User | boolean> {
    const { email } = user;

    const checkEmail = await this.model.getByEmail(email);
    
    if (checkEmail) return false;
    const newUser = await this.model.add(user);
    return newUser;
  }

  public async update(id: number, user: User): Promise<User | boolean> {
    const chekUser = await this.model.getById(id);
    if (!chekUser) return false;

    const updateUser = await this.model.update(id, user);
    return updateUser;
  }

  public async exclude(id: number) {
    const chekUser = await this.model.getById(id);
    if (!chekUser) return false;

    await this.model.exclude(id);
  }
};

export default UsersService;