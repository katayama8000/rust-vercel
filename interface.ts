interface Nameable{
  name: string
  nickName?:string
}

const hoge: Nameable = {
  name:"masaki",
}

// interface Human extends Nameable{
//   age: number;
//   greeting(message: string): void;
// }

// const human: Human = {
//   name: "masaki",
//   age: 28,
//   greeting(message: string) {
//     console.log(message);
//   },
// };

// class Developer implements Human {
//   constructor(
//     public name: string,
//     public age: number,
//     public experience: number
//   ) {}
//   greeting(message: string) {
//     console.log("hello");
//   }
// }

// //experienceがなくても指定できる
// const user:Human = new Developer("masaki",28,3)
