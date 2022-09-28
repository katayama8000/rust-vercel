"use strict";
const hoge = {
    name: "masaki",
};
const human = {
    name: "masaki",
    age: 28,
    greeting(message) {
        console.log(message);
    },
};
class Developer {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log("hello");
    }
}
//experienceがなくても指定できる
const user = new Developer("masaki", 28, 3);
