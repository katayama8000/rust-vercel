"use strict";
var _a, _b;
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
const userSample = (_b = (_a = userList === null || userList === void 0 ? void 0 : userList[3]) === null || _a === void 0 ? void 0 : _a.hoge) !== null && _b !== void 0 ? _b : "HOGE";
console.log(userSample); // 何が出るかな？
