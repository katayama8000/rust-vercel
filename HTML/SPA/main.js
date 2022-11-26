"use strict";
console.log("main.js loaded");
// const test = () => {
//     console.log("test");
// }

const addHistory = () => {
    console.log("work");
    console.log(window.history.length);
    history.pushState({ page: 1 }, "title 1", "?page=1");
    console.log(window.history.state);
    console.log(window.history.length);
    history.pushState({ page: 2 }, "title 2", "?page=2");
    console.log(window.history.state);
    console.log(window.history.length);
    history.replaceState({ page: 3 }, "title 3", "?page=3");
    console.log(window.history.state);
    console.log(window.history.length);
    history.back();
    console.log(window.history.state);
    console.log(window.history.length);
    history.back();
    console.log(window.history.state);
    console.log(window.history.length);
    history.go(2);
    console.log(window.history.state);
    console.log(window.history.length);
}

const back = () => {
    console.log("back");
    history.back();
    //アラート: "location: http://example.com/example.html?page=1, state: {"page":1}"
    history.back();
    //アラート: "location: http://example.com/example.html, state: null
    history.go(2);
    //アラート: "location: http://example.com/example.html?page=3, state: {"page":3}
}


const check = () => {
    console.log("check");
    console.log(window.history.state);
}

window.onpopstate = function (event) {
    // console.log("location: " + document.location + ", state: " + JSON.stringify(event.state));
    // console.log(window.history.length);
};


history.pushState({ page: 1 }, "title 1", "?page=1");
console.log(window.history.length);
history.pushState({ page: 2 }, "title 2", "?page=2");
console.log(window.history.length);
history.pushState({ page: 3 }, "title 3", "?page=3");
console.log(window.history.length);

history.back();
console.log(window.history.length);
//アラート: "location: http://example.com/example.html?page=1, state: {"page":1}"
history.back();
console.log(window.history.length);
//アラート: "location: http://example.com/example.html, state: null
history.back();
console.log(window.history.length);