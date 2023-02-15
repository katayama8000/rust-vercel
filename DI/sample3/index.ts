import 'reflect-metadata';
import { container } from 'tsyringe';
import User from './user';
import Database from './database';

container.register('IDatabase', {
  useClass: Database,
});

export const user = container.resolve(User);

user.userId = 1;
user.userName = 'yamada';
user.saveUser();
