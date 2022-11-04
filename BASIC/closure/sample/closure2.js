function buildFunction() {
  var arr = [];
  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

let fs = buildFunction();
console.log(fs[0]);
fs[0]();
fs[1]();
fs[2]();
