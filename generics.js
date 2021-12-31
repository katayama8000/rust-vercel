"use strict";
//1
// function copy<T>(value: T): T {
//   let hone: T;
//   return value;
// }
// copy<string>("hello");
//2
// function copy<T>(value: T): T {
//   return value;
// }
// copy({ name: "hello" }.name);
//3
function copy(value) {
    return value;
}
copy({ name: "hello" });
class DataBase {
    constructor() {
        this.data = [];
    }
    add(item) {
        this.data.push(item);
    }
    remove(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    get() {
        return this.data;
    }
}
const stringDataBase = new DataBase();
stringDataBase.add("apple");
stringDataBase.add('banana');
stringDataBase.add('grape');
stringDataBase.remove('banana');
console.log(stringDataBase.get());
