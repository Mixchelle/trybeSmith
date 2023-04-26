import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/User';
import connection from './connection';
import { Login } from '../interfaces/Login';

async function createUser(user: User): Promise<User> {
  const { username, vocation, level, password } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );

  const { insertId: id } = result;
  const u: User = {
    id,
    username,
    vocation,
    level,
    password,
  };
  return u;
}

async function getUser(user: Login): Promise<User | undefined> {
  const [data] = await connection.execute(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [user.username],
  );
  const [userObj] = data as User[];
  return userObj;
}

export default {
  createUser,
  getUser,
};
