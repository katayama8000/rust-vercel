const friends = [
  { name: "John", age: 30, country: "Japan" },
  { name: "Ana", age: 20, country: "USA" },
  { name: "Chris", age: 25, country: "Canada" },
] as const;

// 値のユニオン型
type FriendName = typeof friends[number]["name"];
type FriendAge = typeof friends[number]["age"];
type FriendCountry = typeof friends[number]["country"];
// オブジェクトのユニオン型
type Friend = typeof friends[number];

const NAME = {
  HOGE: "hoge",
  FUGA: "fuga",
} as const;
type type1 = keyof typeof NAME;
// => "HOGE" | "FUGA"
type type2 = typeof NAME[keyof typeof NAME];
// => "hoge" | "fuga"
