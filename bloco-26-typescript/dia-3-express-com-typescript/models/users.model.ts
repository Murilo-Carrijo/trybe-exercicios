import { Pool } from 'mysql2/promise';
import User from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const result = await this.connection
      .execute('SELECT * FROM Users');
    const [rows] = result;
    return rows as User[];
  }
  
}