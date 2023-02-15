import 'reflect-metadata';
import { container, inject, injectable } from 'tsyringe';

/*
infrastucture
*/

// infrastucture/DB/UserRepository.ts
const dummyUser1 = {
  id: 1,
  name: 'dummy',
  email: 'test1@test.com',
  password: 'password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const dummyUser2 = {
  id: 2,
  name: 'dummy2',
  email: 'test2@test.com',
  password: 'password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const dummyUser = [dummyUser1, dummyUser2];
class UserRepository implements UserRepository {
  findUserAll(): Promise<User[]> {
    return new Promise((resolve, reject) => {
      const users = dummyUser.map((user) => User.create(user));
      resolve(users);
    });
  }
  findUserById(id: number): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = dummyUser.find((user) => user.id === id);
      if (user) {
        resolve(User.create(user));
      } else {
        resolve(undefined);
      }
    });
  }
  findUserByEmail(email: string): Promise<User | undefined> {
    return new Promise((resolve, reject) => {
      const user = dummyUser.find((user) => user.email === email);
      if (user) {
        resolve(User.create(user));
      } else {
        resolve(undefined);
      }
    });
  }

  createUser(user: User): Promise<User> {
    const newUser = {
      id: dummyUser.length + 1,
      name: user.name,
      email: user.email,
      password: user.password,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dummyUser.push(newUser);
    return new Promise((resolve, reject) => {
      resolve(User.create(newUser));
    });
  }

  updateUser(user: User): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}

/*
domain
*/

// domain/repositories/UserRepository.ts
interface UserRepository {
  findUserAll(): Promise<User[]>;
  findUserById(id: number): Promise<User | undefined>;
  findUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

// domain/entities/User.class.ts
class User {
  private constructor(
    private readonly _id: number,
    private _email: string,
    private _password: string,
    private _name: string,
    private _createdAt: Date,
    private _updatedAt: Date
  ) {}

  get id(): number {
    return this._id;
  }
  get email(): string {
    return this._email;
  }
  get password(): string {
    return this._password;
  }
  get name(): string {
    return this._name;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  public static create(userInfo: {
    id: number;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }): User {
    return new User(
      userInfo.id,
      userInfo.email,
      userInfo.password,
      userInfo.name,
      userInfo.createdAt,
      userInfo.updatedAt
    );
  }
}

/*
usecase
*/

// usecase/dto/UserDto.ts
interface UserDto {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

// usecase/FetchUserAllUseCase.ts
@injectable()
class FetchUserAllUseCase {
  constructor(
    @inject('UserRepository')
    private userRepository: UserRepository
  ) {}

  async execute(): Promise<UserDto[]> {
    return await this.userRepository.findUserAll();
  }
}

/*
index
*/

// index.ts
container.register('UserRepository', { useValue: UserRepository });

container.resolve(FetchUserAllUseCase).execute();
