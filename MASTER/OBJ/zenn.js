class Person {
    constructor(name, food) {
        this.name = name;
        this.food = food;
    }
}

Person.prototype.eat = function () {
    console.log(`${this.name} is eating ${this.food}`);
};

const person = new Person("John", "apple");
console.log(person);
person.eat();

class F {
    name = "John";
    age = 20;
}
F.prototype.name = "John";
let f = new F();
f.name = "Mike";
console.log(f.name); // Mike
console.log(F.prototype.name); // John
console.log(f)

let obj1 = {
    name: "John",
    sayHello: function () {
        console.log("Hello " + this.name);
    },
};

let obj2 = {
    name: "Mike",
};

obj2.__proto__ = obj1;
let obj3 = {};
obj3.__proto__ = obj2;
obj3.sayHello();
// Hello Mike