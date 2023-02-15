import Database from './database';

export default class User {
  userId: number = 0;
  userName: string = '';
  constructor(private database: Database) {}

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this);
    }
  }
}
