export type user = {
  name: string;
};

declare namespace MyNamespace {
  interface user {
    name: string;
  }
}
// namespace MyNamespace {
//   export interface user {
//     age: string;
//   }
// }

type foo = MyNamespace.user['name'];
