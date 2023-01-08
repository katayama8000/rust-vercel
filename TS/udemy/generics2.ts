function copy01<T, U>(value: T, num: U): { name: T; age: U } {
  return { name: value, age: num };
}

const clone01 = copy01<string, number>('Mike', 20);
console.log(clone01['name']);

function copy02<T extends { name: string; age: number }>(value: T): T {
  return value;
}

const clone02 = copy02({ name: 'John', age: 20, country: 'USA' });
console.log(clone02['name']);

//type K01 = keyof { name: string; age: number };

function copy03<T extends { name: string }, U extends keyof T>(
  value: T,
  key: U
): T[U] {
  return value[key];
}

const clone03 = copy03({ name: 'John', age: 20, country: 'USA' }, 'country');
console.log(clone03);
