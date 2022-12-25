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

async function main1() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('hello');
      resolve('OK');
    }, 1000);
  });

  console.log('world');
}

main1();

function main2() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log('hello');
      resolve('OK');
    }, 2000);
  }).then((message) => {
    console.log('world');
    console.log(message);
  });
}

main2();

const { country, city } = { country: 'Japan', city: 'Tokyo' };
let myFeelingLevel = 0;

const locations: Record<string, string> = {
  Japan: 'Tokyo',
  America: 'New York',
};

myFeelingLevel = locations[country] === city ? 100 : 50;

console.log(myFeelingLevel, locations[country]);
