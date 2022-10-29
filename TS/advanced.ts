type Engineer = {
  name: string;
  role: string;
};

type Blogger = {
  name: string;
  follower: number;
};

type EandB = Engineer & Blogger;
const suda1: EandB = {
  name: "masaki",
  role: "front-end",
  follower: 10000,
};

// function toUpperCase(x: string | number) {
//   if (typeof x === "string") {
//     return x.toUpperCase;
//   }

//   return "";
// }

type NomadWorker = Engineer | Blogger;
function Profile(nomadWorker: NomadWorker) {
  nomadWorker.name;
  //これは無理
  //nomadWorker.role
  if ("role" in nomadWorker) {
    console.log(nomadWorker.role);
  }

  if ("follower" in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

class Dog {
  speak() {
    console.log("bow-bow");
  }
}

class Bird {
  speak() {
    console.log("tweet-tweet");
  }

  fly() {
    console.log("flutter");
  }
}

type Pet = Dog | Bird;
function havePet(pet: Pet) {
  pet.speak();
  if (pet instanceof Bird) {
    pet.fly();
  }
}

havePet(new Bird());
havePet(new Dog());

const input1 = document.getElementById("input")!;
const input2 = document.getElementById("input") as HTMLInputElement;
input2.value = "value";
//
const input = document.getElementById("input");

// function toUpperCase(x: string): string;
// function toUpperCase(x: number): number;

function toUpperCase(x: string | number) {
  if (typeof x === "string") {
    return x.toUpperCase;
  }
  return x;
}

const upperHello = toUpperCase("hello");

interface DownLoadedData {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadedData: DownLoadedData = {
  id: 1,
};

console.log(downloadedData.user?.name);

const capitals: {
  [countryName: string]: string;
} = {
  japan: "tokyo",
  korea: "soul",
};

const stringFunc = (array: string[], val: string): string => {
  return val;
};

const numberFunc = (array: number[], val: number): number => {
  return val;
};

type Func<T> = {
  (array: T[], val: T): T;
};

const hello: Func<string> = (array, val) => {
  return val;
};
