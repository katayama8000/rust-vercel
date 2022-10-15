import * as xxx from "./sample1";
const age = xxx.age;
const name = xxx.name;
console.log(age, name);
import aaa, { sayHello } from "./sample1";
console.log(sayHello());
console.log(aaa);
import { dog } from "./sample1";
const myDog1 = Object.assign({}, dog);
const myDog2 = {
    name: "dog",
    age: 3,
};
