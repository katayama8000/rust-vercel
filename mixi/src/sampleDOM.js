"use strict";
const ui = {
    element: "article",
    children: [
        {
            element: "cite",
            innerText: "ユーザー",
        },
        {
            element: "p",
            innerText: "コメント",
        },
        {
            element: "img",
            src: "https://...jpg",
        },
    ],
};
const obj1 = {
    element: "div",
    innerText: "hello",
};
const obj2 = {
    element: "div",
    innerText: "hello",
};
console.log(obj1 === obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
const obj3 = JSON.stringify(obj1);
const obj4 = JSON.stringify(obj2);
console.log(obj3);
console.log(obj1);
