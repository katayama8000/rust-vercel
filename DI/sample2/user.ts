import { injectable, inject } from 'tsyringe';

export interface IDatabase {
  saveUser: (user: User) => void;
}

@injectable()
export default class User {
  userId: number = 0;
  userName: string = '';

  constructor(
    @inject('IDatabase')
    private database: IDatabase
  ) {}

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this);
    }
  }
}
