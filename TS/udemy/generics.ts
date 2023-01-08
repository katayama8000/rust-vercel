//1
function copy1<T>(value: T): T {
  return value;
}

const clone1 = copy1<string>('hello');
const clone2 = copy1<{ name: 'hello' }>({ name: 'hello' });
const clone3 = copy1<number>(2);
const clone4 = copy1<string>({ name: 'hello' }.name);

//2
function copy2<T extends { name: 'hello'; age: 20 }>(value: T): T {
  return value;
}

const clone5 = copy2({ name: 'hello', age: 20 });
const clone6 = copy2({
  name: 'hello',
  age: 20,
  country: [{ japan: 'akita' }, { USA: 'NY' }],
});

type K = keyof { name: string; age: number };

class DataBase<T extends string | number | boolean> {
  private data: T[] = [];
  add(item: T) {
    this.data.push(item);
  }
  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }
  get() {
    return this.data;
  }
}

const stringDataBase = new DataBase<string>();
stringDataBase.add('apple');
stringDataBase.add('banana');
stringDataBase.add('grape');
stringDataBase.remove('banana');

console.log(stringDataBase.get());
