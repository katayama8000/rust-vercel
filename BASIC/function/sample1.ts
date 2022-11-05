// 即時関数
(function () {
  console.log('Hello World');
})();

// 再起関数
function factorial(n: number): number {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));
