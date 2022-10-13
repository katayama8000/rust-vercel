// 配列から、ユニオン型を生成
const array = ["Hello", "World", "TypeScript"] as const;
type ArrayType = typeof array[number];

// 半角数字の場合は、number型を返す
let text = "2213333333333333513535135";
if (parseInt(text)) {
  console.log(parseInt(text), "Yes");
} else {
  console.log(parseInt(text), "No");
}

const obj = {
  name: "Hello",
  age: 20,
  gender: "male",
} as const;

type ObjType1 = typeof obj;
type ObjType2 = keyof typeof obj;
type ObjType3 = typeof obj[keyof typeof obj];
