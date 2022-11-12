"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    // sayHello = () => {
    //     console.log('Hello, I am ' + this.name);
    // }

}


Person.prototype.handleEvent = function () {
    console.log('Hello, I am ' + this.name);
}

console.log(Person.prototype, "watching...");


let person = new Person('John');
// let button = document.getElementById('button');
button.addEventListener('click', person, false);

