class Person {
    constructor(name) {
        this.name = name;
    }
}

Person.prototype.sayHello = function () {
    console.log('Hello, I am ' + this.name);
}



let person = new Person('John');
let button = document.getElementById('button');
button.addEventListener('click', person.sayHello.bind(person), false);