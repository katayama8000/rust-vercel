import 'reflect-metadata';
import { container } from 'tsyringe';
import User from './user';
import Database from './database';

// IDatabaseにDatabaseを登録
container.register('IDatabase', {
  useClass: Database,
});

// コンテナに登録された依存関係からインスタンスを取り出します
export const user = container.resolve(User);

user.userId = 1;
user.userName = 'yamada';
user.saveUser();
