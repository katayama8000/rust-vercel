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
