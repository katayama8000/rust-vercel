"use strict";
// 半角数字の場合は、number型を返す
let text = '2213333333333333513535135';
if (parseInt(text)) {
    console.log(parseInt(text), 'Yes');
}
else {
    console.log(parseInt(text), 'No');
}
const ArrayList = [10, 2, 3, 4, 5];
const initArray = 100;
const sum = ArrayList.reduce((accumulator, currentValue) => {
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, initArray);
console.log(sum);
// function confirmed(fn: (arg0: string | null) => void) {
//   const input = window.prompt('Are you sure? (y/n)');
//   fn(input);
// }
// confirmed(function (input) {
//   if (input === 'y') {
//     console.log('OK');
//   } else {
//     console.log('Cancel');
//   }
// });
// コールバック関数
// const confirmed1 = (fn: () => void) => {
//   if (window.confirm('Are you sure? (y/n)')) {
//     fn();
//   }
// };
// const unFollow = () => {
//   console.log('unFollow');
// };
// const cancelTweet = () => {
//   console.log('cancelTweet');
// };
// confirmed1(unFollow);
// ローカルストレージに保存と取得

