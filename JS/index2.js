console.log("Hello from JS/index2.js");

// Object.assign sample
const target = { a: 1, b: 2 }
const source = { b: 3, d: 4 }

const returnedTarget = Object.assign(target, source);

console.log(target)
console.log(source)
console.log(returnedTarget)

emplyees = [
    {
        firstName: 'John',
        lastName: 'Doe'
    },
    {
        firstName: 'David',
        lastName: 'Hue',
    },
    {
        fistName: 'Jack',
        lastName: 'Daniel'
    }
];

emplyee = {
    firstName: 'David',
    lastName: 'Cameron'
}

Object.assign(emplyees[1], emplyee);
console.log(emplyees);

// let user = { firstName: 'John', lastName: 'Doe' };
// let user_clone = Object.assign({}, user);
// console.log(user_clone);

let user = {
    username: "John",
};

let user_id = {
    id: 1,
};

let email = {
    email: "john@example.com",
};

user = Object.assign(user, user_id, email);

console.log(user);
