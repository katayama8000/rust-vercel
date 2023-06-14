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

// 足し算する関数
const add = (a: number, b: number): number => a + b;

// 引き算する関数
const sub = (a: number, b: number): number => a - b;

// 掛け算する関数
const mul = (a: number, b: number): number => a * b;

// 割り算する関数
const div = (a: number, b: number): number => a / b;

// blobをbase64に変換する関数
const blobToBase64 = (blob: Blob): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.onerror = (error) => {
      reject(error);
    };
  });
};

interface UserInterface {
  name: string;
  age: number;
  sex?: 'man' | 'woman';
  family?: {
    brother?: {
      name: string;
      age: number;
    };
    sister?: {
      name: string;
      age: number;
    };
  };
}

const userforinterface: UserInterface = {
  name: 'bob',
  age: 20,
  family: {
    brother: {
      name: 'tom',
      age: 25,
    },
  },
};

const isBrotherAdult = (user: UserInterface): boolean => {
  return user.family?.brother?.age! >= 20;
};

// learn instanceof

class Person1 {
  constructor(public name: string, public age: number) {}
}

class Person2 {
  constructor(public name: string, public age: number) {}
}

const person1 = new Person1('bob', 20);
const person2 = new Person2('tom', 25);

console.log(person1 instanceof Person1); // true
console.log(person1 instanceof Person2); // false

function getMonth(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.getMonth() + 1);
  }
}

interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(shape: Shape): number {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size;
    case 'rectangle':
      return shape.width * shape.height;
    case 'circle':
      return Math.PI * shape.radius ** 2;
    default:
      throw new Error('Invalid shape!');
  }
}

function isSquare(shape: Shape): shape is Square {
  return shape.kind === 'square';
}

const square: Square = { kind: 'square', size: 5 };
const rectangle: Rectangle = { kind: 'rectangle', width: 5, height: 10 };
const circle: Circle = { kind: 'circle', radius: 5 };

console.log(area(square)); // Output: 25
console.log(area(rectangle)); // Output: 50
console.log(area(circle)); // Output: 78.53981633974483

console.log(isSquare(square)); // Output: true
console.log(isSquare(rectangle)); // Output: false
console.log(isSquare(circle)); // Output: false

const isString = (test: unknown): test is string => {
  return typeof test === 'string';
};

const example = (foo: unknown) => {
  if (isString(foo)) {
    console.log(foo.length); // Error fooはまだunknownとして推論される
  }
};

const isNumber = (val: unknown): val is number => {
  return typeof val === 'number';
};
