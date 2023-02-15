import { injectable, inject } from 'tsyringe';

export interface IDatabase {
  saveUser: (user: User) => void;
}

@injectable()
// injectable()をつけることで、DIコンテナに登録される
export default class User {
  userId: number = 0;
  userName: string = '';

  constructor(
    // IDatabaseのinterfaceへの依存を注入
    @inject('IDatabase')
    private database: IDatabase
  ) {}

  saveUser() {
    if (this.userId) {
      this.database.saveUser(this);
    }
  }
}
