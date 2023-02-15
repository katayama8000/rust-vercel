import User from './user';

export default class Database {
  saveUser(user: User) {
    console.log(`Saved!! number:${user.userName} name:${user.userName}`); // Saved !! number:1 name:yamada
  }
}
