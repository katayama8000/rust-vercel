import User, { IDatabase } from './user';

export default class Database implements IDatabase {
  saveUser(user: User) {
    console.log(`Saved ${user.userName}!`); // Saved yamada!
  }
}
