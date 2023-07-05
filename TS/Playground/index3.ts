declare const member: {
  name: string;
  age: number;
  address: string;
};

const myMember: typeof member = {
  name: 'bob',
  age: 20,
  address: 'tokyo',
};

console.log(myMember['name']);

let s1: Symbol = Symbol('foo');
let s2: Symbol = Symbol('foo');
console.log(s1 === s1);

let Sym1 = Symbol('Sym');
let Sym2 = Symbol('Sym');

console.log(Sym1 === Sym2); // "false" を返す

const phantom: unique symbol = Symbol('phantom');
type Phantom = typeof phantom;
console.log(phantom);
