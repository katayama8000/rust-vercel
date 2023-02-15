export {};

// 一部だけ必須
type SomeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

type User = {
  name: string;
  mail: string;
  age?: number;
  phone?: string;
};

type AdultUser = SomeRequired<User, 'age'>;

const adult: AdultUser = {
  name: 'テスト太郎',
  mail: 'test@example.com',
  age: 20,
};

console.log(adult);

type SomePartial<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type mailUser = SomePartial<User, 'mail'>;

const mail: mailUser = {
  name: 'テスト太郎',
};
