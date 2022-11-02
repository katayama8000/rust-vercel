const countList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 代入

let sum3 = 0;
for (let i = 0; i <= countList.length; i++) {
  sum3 = sum3 + i;
}

// 等価
let sum2 = countList.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum3 === sum2);
