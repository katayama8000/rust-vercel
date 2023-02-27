// padstart
const num1 = '15';
console.log(num1.padStart(2, '0'));

class Human {
  static readonly age: number = 10;
}

console.log(Human.age);

let date = new Date(2022, 13, 0);
console.log(date.getDate()); // 31

date = new Date(2022, 14, 0);
console.log(date.getDate()); // 28

date = new Date(2022, 15, 0);
console.log(date.getDate()); // 31

date = new Date(2022, 16, 0);
console.log(date.getDate()); // 30
