// 配列から、ユニオン型を生成
const array = ["Hello", "World", "TypeScript"] as const;
type ArrayType = typeof array[number];
