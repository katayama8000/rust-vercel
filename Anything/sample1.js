"use strict";
const friends = [
    { name: "John", age: 30, country: "Japan" },
    { name: "Ana", age: 20, country: "USA" },
    { name: "Chris", age: 25, country: "Canada" },
];
const NAME = {
    HOGE: "hoge",
    FUGA: "fuga",
};
// => "hoge" | "fuga"
const userList = [
    { hoge: "hoge1", piyo: "piyo1" },
    { hoge: "hoge2", piyo: "piyo2" },
    { hoge: "hoge3", piyo: "piyo3" },
];
const userSample = userList?.[3]?.hoge ?? "HOGE";
console.log(userSample);
