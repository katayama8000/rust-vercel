const fruits1 = new Set(['apple', 'orange', 'banana']);
console.log(fruits1);

const fruits2 = new Set(['apple', 'apple', 'apple']);
console.log(fruits2);

fruits1.add('strawberry');
console.log(fruits1);

fruits1.forEach((value, key) => {
  console.log(value, key);
});

fruits1.delete('apple');
console.log(fruits1);

console.log(fruits1.has('apple'));
console.log(fruits1.has('orange'));

fruits1.clear();
console.log(fruits1);
