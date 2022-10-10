"use strict";
var _a;
const suda1 = {
    name: "masaki",
    role: "front-end",
    follower: 10000,
};
function Profile(nomadWorker) {
    nomadWorker.name;
    //これは無理
    //nomadWorker.role
    if ("role" in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ("follower" in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
class Dog {
    speak() {
        console.log("bow-bow");
    }
}
class Bird {
    speak() {
        console.log("tweet-tweet");
    }
    fly() {
        console.log("flutter");
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof Bird) {
        pet.fly();
    }
}
havePet(new Bird());
havePet(new Dog());
const input1 = document.getElementById("input");
const input2 = document.getElementById("input");
input2.value = "value";
//
const input = document.getElementById("input");
// function toUpperCase(x: string): string;
// function toUpperCase(x: number): number;
function toUpperCase(x) {
    if (typeof x === "string") {
        return x.toUpperCase;
    }
    return x;
}
const upperHello = toUpperCase("hello");
const downloadedData = {
    id: 1,
};
console.log((_a = downloadedData.user) === null || _a === void 0 ? void 0 : _a.name);
const capitals = {
    japan: "tokyo",
    korea: "soul",
};
const stringFunc = (array, val) => {
    return val;
};
const numberFunc = (array, val) => {
    return val;
};
const hello = (array, val) => {
    return val;
};
