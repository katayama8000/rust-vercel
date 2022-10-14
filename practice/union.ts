// 配列から、ユニオン型を生成
const array = ["Hello", "World", "TypeScript"] as const;
type ArrayType = typeof array[number];

const obj = {
  name: "Hello",
  age: 20,
  gender: "male",
} as const;

type ObjType1 = typeof obj;
type ObjType2 = keyof typeof obj;
type ObjType3 = typeof obj[keyof typeof obj];
