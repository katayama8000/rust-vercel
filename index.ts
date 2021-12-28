//1
// let aaa: boolean = true
// let bbb: string = "string"
// let ccc: number = 100
// let ddd: number = 3.14
// let eee: number = -1

//2
// let aaa = true
// let bbb = "string"
// let ccc = 100
// let ddd: number = 3.14
// let eee: number = -1

//3
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "jack",
//   age: 20,
// };

//4
//const fruits:string[] = ['apple','banana','grape']

//5
//const book:[string,number,boolean] = ['business',1500, false]

//6
// enum CoffeeSize {
//     SHORT,
//     TALL,
//     GRANDE
// }

// const coffee = {
//   hot: true,
//   size: CoffeeSize.TALL,
// };

//7
// let unionType: number | string = 10;
// let unionTypes: (number | string)[] = [21, "hello"];

//8
// const apple: 'apple' = 'apple'
// let clothSize: 'small' | 'medium' | 'large' = 'large'

//9
// type ClothSize = 'small' | 'medium' | 'large'
// let clothSize: ClothSize = 'large'

//10
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

//11
// function say(): void {
//   console.log("hello");
// }

//12
// function add(num1: number, num2: number): number {
//   return num1 + num2;
// }

// const anotheradd: (na: number, n2: number) => number = add;

//13
// const doubleNumber: (num: number) => number = (num) => num * 2;

// function doubleAndHandle(num: number, cb: (num: number) => void): void {
//   const doubleNum = cb(num * 2);
//   console.log(num * 2);
// }

// doubleAndHandle(21, (doubleNum) => {
//   return doubleNum;
// });

//14
// function error(message: string):never {
//     throw new Error(message);
//     // while (true) {
        
//     // }
// }

//
