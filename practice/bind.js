"use strict";
const myButton = {
    content: "OK",
    click() {
        console.log(this);
        console.log(this.content + " clicked");
    },
    yourButton: {
        content: "No",
        click() {
            console.log(this);
            console.log(this.content + " clicked your button");
        },
    },
};
const yourButton = {
    content: "No",
};
const looseClick = myButton.click.bind(yourButton);
//myButton.yourButton.click();
looseClick();
console.log("---------------------");
const greeting = function () {
    console.log(this);
    console.log(this.name);
    console.log(this.age);
};
//greeting();
const object = { name: "John", age: 30 };
const new_greeting = greeting.bind(object);
new_greeting();
console.log("---------------------");
