"use strict";
//1
// class Person {
//   name: string;
//   constructor(initName: string) {
//     this.name = initName;
//   }
//   greeting(this: { name: string }) {
//     console.log(`hello,${this.name}`);
//   }
// }
// const suda = new Person("masaki");
//2
// class Person {
//   name: string;
//   constructor(initName: string) {
//     this.name = initName;
//   }
//   greeting(this: Person) {
//     console.log(`hello,${this.name}`);
//   }
// }
// const suda = new Person("masaki");
//3
// class Person {
//   private name: string;
//   private age: number;
//   constructor(initName: string, initAge: number) {
//     this.name = initName;
//     this.age = initAge;
//   }
//   incrementAge() {
//     this.age += 1;
//   }
//   greeting(this: Person) {
//     console.log(`hello,${this.name},${this.age}yearsOld`);
//   }
// }
// const suda = new Person("masaki");
//
// //4
// class Teacher extends Person {
//   get subject() {
//     if (!this._subject) {
//       throw new Error("no subject");
//     }
//     return this._subject;
//   }
//   set subject(value) {
//     this._subject = value;
//   }
//   constructor(name: string, age: number, public _subject: string) {
//     super(name, age);
//   }
// }
// const teacher = new Teacher("masaki", 28, "English");
// //getter
// teacher.subject
// //setter
// teacher.subject = 'Math'
class AbstractClass {
    constructor(name, old) {
        this.name = name;
        this.old = old;
    }
    showInfo() {
        console.log(`name: ${this.name}, ${this.showDetail()}`);
    }
}
class ExtendedClass extends AbstractClass {
    constructor(name, old, weight) {
        super(name, old);
        this.weight = weight;
    }
    showDetail() {
        return `old: ${this.old}, weight: ${this.weight}`;
    }
}
const extendedClass = new ExtendedClass('ジョン', 3, 20);
extendedClass.showInfo(); // name: ジョン, old: 3, weight: 20
