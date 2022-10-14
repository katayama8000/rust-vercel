"use strict";
//1
function copy1(value) {
    return value;
}
const clone1 = copy1("hello");
const clone2 = copy1({ name: "hello" });
const clone3 = copy1(2);
const clone4 = copy1({ name: "hello" }.name);
//2
function copy2(value) {
    return value;
}
const clone5 = copy2({ name: "hello", age: 20 });
const clone6 = copy2({
    name: "hello",
    age: 20,
    country: [{ japan: "akita" }, { USA: "NY" }],
});
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
