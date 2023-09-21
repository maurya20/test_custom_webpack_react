const arr = [1, 2, 3, 4, 5];

function add(a, ...rest) {
  let result = 0;

  for (let arg of rest) {
    result += arg;
  }
  return result + a;
}

console.log(add(0, 1, 2, 3, 4, 5));
