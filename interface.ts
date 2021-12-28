interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human: Human = {
  name: "masaki",
  age: 28,
  greeting(message: string) {
    console.log(message);
  },
};
