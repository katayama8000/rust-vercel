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
class Person {
  private name: string;
  private age: number;
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }
  incrementAge() {
    this.age += 1;
  }
  greeting(this: Person) {
    console.log(`hello,${this.name},${this.age}yearsOld`);
  }
}

// const suda = new Person("masaki");

//4
class Teacher extends Person {
  get subject() {
    if (!this._subject) {
      throw new Error("no subject");
    }

    return this._subject;
  }

  set subject(value) {
    this._subject = value;
  }
  constructor(name: string, age: number, public _subject: string) {
    super(name, age);
  }
}

const teacher = new Teacher("masaki", 28, "English");
//getter
teacher.subject
//setter
teacher.subject = 'Math'

