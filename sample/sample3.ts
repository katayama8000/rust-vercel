// 半角数字の場合は、number型を返す
let text = "2213333333333333513535135";
if (parseInt(text)) {
  console.log(parseInt(text), "Yes");
} else {
  console.log(parseInt(text), "No");
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
type myFamily = Omit<family, "grandmother" | "grenfather">;

// 祖母、祖父を追加
type myFamily2 = {
  grandmother: string;
  grenfather: string;
} & myFamily;
