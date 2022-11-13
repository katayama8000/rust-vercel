// 半角数字の場合は、number型を返す
let text = '2213333333333333513535135';
if (parseInt(text)) {
  console.log(parseInt(text), 'Yes');
} else {
  console.log(parseInt(text), 'No');
}

const ArrayList = [10, 2, 3, 4, 5];

const initArray = 100;
const sum: number = ArrayList.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator + currentValue;
}, initArray);

console.log(sum);

type family = {
  mother: string;
  father: string;
  child: string;
  grandmother: string;
  grenfather: string;
};

// 祖母、祖父を除外
type myFamily = Omit<family, 'grandmother' | 'grenfather'>;

// 祖母、祖父を追加
type myFamily2 = {
  grandmother: string;
  grenfather: string;
} & myFamily;

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

// localStorage.setItem('name', 'Taro');
// localStorage.setItem('age', '20');

// const getName = () => {
//   const user = localStorage.getItem('name');
//   localStorage.name = 'user';
//   return user;
// };

//console.log(getName());

const isNight = () => {
  const hour = new Date().getHours();
  return hour >= 18 || hour <= 6;
};

// let msg = 'hello'
// if (isNight()) { msg = 'good evening' }

// 即時関数を使って、letを避ける
const msg = (() => {
  if (isNight()) {
    return 'good evening';
  }
  return 'hello';
})();

if (true) {
  const msg1 = 'hello';
  let msg2 = 'hello';
  var msg3 = 'hello';
}

// error
// console.log(msg1);
// error
// console.log(msg2);
// OK
console.log(msg3);

const user1 = {
  name: 'Taro',
  age: 20,
  height: 170,
  weight: 60,
};

console.log(user1['name']);
console.log(user1.name);

const str = '1 2 3';
const [A, B, C] = str.split(' ');
console.log(A, B, C);
