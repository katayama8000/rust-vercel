//1
// function copy<T>(value: T): T {
//   let hone: T;
//   return value;
// }

// copy<string>("hello");

//2
// function copy<T>(value: T): T {
//   return value;
// }

// copy({ name: "hello" }.name);

//3
function copy<T extends { name: string }>(value: T): T {
  return value;
}

copy({ name: "hello" });

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
stringDataBase.add('banana')
stringDataBase.add('grape')
stringDataBase.remove('banana')

console.log(stringDataBase.get())