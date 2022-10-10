import * as xxx from "../import-export/sample1";
const age = xxx.age;
const name = xxx.name;
console.log(age, name);

import aaa, { sayHello } from "../import-export/sample1";
console.log(sayHello());
console.log(aaa);

import { type animal, dog } from "../import-export/sample1";

const myDog1: animal = { ...dog };

const myDog2: typeof dog = {
  name: "dog",
  age: 3,
};
