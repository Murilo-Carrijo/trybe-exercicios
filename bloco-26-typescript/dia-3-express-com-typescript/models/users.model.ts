import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async getById(id: number): Promise<User> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE id=?;', [id]);
    const [rows] = result;
    const [user] = rows as User[];    
    
    return user;
  }

  public async add(user: User): Promise<User> {
    const { name, email, password } = user;
    const result = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Users (name, email, password) VALUE (?, ?, ?);', [name, email, password]);
      const [dataInserted] = result;
      const { insertId } = dataInserted;
    return {
      id: insertId,
      ...user
    };
  }

  public async update (id: number, user: User): Promise<User> {
    const {name, email, password } = user;
    await this.connection
      .execute('UPDATE Users SET name=?, email=?, password=? WHERE id=?;',
      [name, email, password, id]);
      return {
        id, name, email, password
      }
  }

  public async getByEmail (email: string): Promise<User> {
    const result = await this.connection
      .execute('SELECT * FROM Users WHERE email=?;', [email]);
      const [rows] = result;
      const [user] = rows as User[];    
      
      return user;
  }

  public async exclude (id: number) {
    await this.connection.execute('DELETE FROM Users WHERE id=?;', [id]);
  }
}