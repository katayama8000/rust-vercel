import User from './user';
import Database from './database';

const user = new User(new Database());
user.userId = 1;
user.userName = 'yamada';
user.saveUser();
