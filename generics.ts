//1
function copy1<T>(value: T): T {
  let hone: T;
  return value;
}

copy1<string>("hello");

//2
function copy2<T>(value: T): T {
  return value;
}

copy2({ name: "hello" }.name);

//3
function copy3<T extends { name: string }>(value: T): T {
  return value;
}

copy3({ name: "hello" });

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
stringDataBase.add("apple");
stringDataBase.add("banana");
stringDataBase.add("grape");
stringDataBase.remove("banana");

console.log(stringDataBase.get());
