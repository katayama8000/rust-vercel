let aaa = true;
let bbb = "string";
let ccc = 100;
let ddd: number = 3.14;
let eee: number = -1;

const person: {
  name: string;
  age: number;
} = {
  name: "jack",
  age: 20,
};

const fruits: string[] = ["apple", "banana", "grape"];

const book: [string, number, boolean] = ["business", 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

let unionType: number | string = 10;
let unionTypes: (number | string)[] = [21, "hello"];

const apple: "apple" = "apple";
let clothSize: "small" | "medium" | "large" = "large";

type ClothSize = "small" | "medium" | "large";
let clothSizeNew: ClothSize = "large";

function add1(num1: number, num2: number): number {
  return num1 + num2;
}

function say(): void {
  console.log("hello");
}

function add2(num1: number, num2: number): number {
  return num1 + num2;
}

const anotheradd: (na: number, n2: number) => number = add1;

const doubleNumber: (num: number) => number = (num) => num * 2;

function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2);
  console.log(num * 2);
}

doubleAndHandle(21, (doubleNum) => {
  return doubleNum;
});

function error(message: string): never {
  throw new Error(message);
}
