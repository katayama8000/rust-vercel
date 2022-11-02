const name = 'Mike';
const age = 23;

export { name, age };

export const sayHello = () => {
  return 'hello';
};

export default 'default';

type animal = {
  name: string;
  age: number;
};

const dog: animal = {
  name: 'dog',
  age: 3,
};

export { animal, dog };
