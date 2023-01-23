import { type animal, dog } from './index2';
// import type { animal } from './index2';
// import { dog } from './index2';

const myDog1: animal = { ...dog };

const myDog2: typeof dog = {
  name: 'dog',
  age: 3,
};
