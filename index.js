"use strict";
let aaa = true;
let bbb = "string";
let ccc = 100;
let ddd = 3.14;
let eee = -1;
const person = {
    name: "jack",
    age: 20,
};
const fruits = ["apple", "banana", "grape"];
const book = ["business", 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
let unionType = 10;
let unionTypes = [21, "hello"];
const apple = "apple";
let clothSize = "large";
let clothSizeNew = "large";
function add1(num1, num2) {
    return num1 + num2;
}
function say() {
    console.log("hello");
}
function add2(num1, num2) {
    return num1 + num2;
}
const anotheradd = add1;
const doubleNumber = (num) => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log(num * 2);
}
doubleAndHandle(21, (doubleNum) => {
    return doubleNum;
});
function error(message) {
    throw new Error(message);
}
