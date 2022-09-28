"use strict";
//1
function copy1(value) {
    let hone;
    return value;
}
copy1("hello");
//2
function copy2(value) {
    return value;
}
copy2({ name: "hello" }.name);
//3
function copy3(value) {
    return value;
}
copy3({ name: "hello" });
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
stringDataBase.add("banana");
stringDataBase.add("grape");
stringDataBase.remove("banana");
console.log(stringDataBase.get());
