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

const suda = new Person("masaki", 23);

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
teacher.subject;
//setter
teacher.subject = "Math";

abstract class AbstractClass {
  protected constructor(private name: string, protected old: number) {}

  showInfo(): void {
    console.log(`name: ${this.name}, ${this.showDetail()}`);
  }

  //このクラスを継承したクラスはshowDetailメソッドを持つ必要がある
  protected abstract showDetail(): string;
}

class ExtendedClass extends AbstractClass {
  constructor(name: string, old: number, private weight: number) {
    super(name, old);
  }

  showDetail(): string {
    return `old: ${this.old}, weight: ${this.weight}`;
  }
}

const extendedClass = new ExtendedClass("ジョン", 3, 20);
extendedClass.showInfo(); // name: ジョン, old: 3, weight: 20
