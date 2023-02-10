// https://zenn.dev/nbr41to/articles/7d2e7c4e31c54c

const f1 = <T>(arg: T): T => arg;

console.log(f1<number>(10));
console.log(f1<string>('Hello'));

interface User {
  name: string;
}

interface Admin extends User {
  isMaster: boolean;
}

const owner: Admin = {
  name: 'nbr41to',
  isMaster: true,
};

const f2 = <T extends Admin>(arg: T): T => arg;
console.log(f2(owner));
console.log(f2({ name: 'nbr42to', isMaster: false }));

type A<T> = T extends string ? string : number;

type B = A<string>; // string
type C = A<boolean>; // number
type D = A<'hello'>; // string
type E = A<123>; // numbe

type UserA = {
  name: string;
  age: number;
};
type UserB = {
  name: string;
  email: string;
};
type UserC = {
  name: string;
  age: number;
  email: string;
};
type U<T> = T extends UserA ? number : string;

type A1 = U<UserA>; // number
type B2 = U<UserB>; // string
type C3 = U<UserC>; // number
