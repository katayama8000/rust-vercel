// bind
function say(greetings, honorifics) {
    console.log(greetings + ' ' + honorifics + ' ' + this.name);
}

const tom = { name: 'Tom' };
const sayToTom = say.bind(tom);
sayToTom('Hello', 'Mr');

console.log("-----------------------------------");
// apply,call
function sayHello(greetings, honorifics) {
    console.log(greetings + ' ' + honorifics + ' ' + this.name);
}

console.log(this)
const mike = { name: 'Mike' };
const becky = { name: 'Becky' };
sayHello('Hello', 'Mr');
sayHello.apply(mike, ['Hello', 'Mr']);
sayHello.apply(becky, ['Hello', 'Ms']);
sayHello.call(mike, 'Hello', 'Mr');
sayHello.call(becky, 'Hello', 'Ms');


