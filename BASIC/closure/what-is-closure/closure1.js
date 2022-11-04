function hello() {
    function child() {
        console.log("私はhelloの子です");
    }
    return child;
}

function recieve(v) {
    console.log("vを実行します");
    v();
}

const x = hello();
console.log(x);
x();

recieve(x);
