import Database from './database';

export default class User {
  userId: number = 0;
  userName: string = '';

  saveUser() {
    if (this.userId) {
      const database = new Database();
      database.saveUser(this);
    }
  }
}
