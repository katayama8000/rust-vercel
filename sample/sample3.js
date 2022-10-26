"use strict";
// 半角数字の場合は、number型を返す
let text = "2213333333333333513535135";
if (parseInt(text)) {
    console.log(parseInt(text), "Yes");
}
else {
    console.log(parseInt(text), "No");
}
const ArrayList = [10, 2, 3, 4, 5];
const initArray = 100;
const sum = ArrayList.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, initArray);
console.log(sum);
