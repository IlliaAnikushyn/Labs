function sum1(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

function sum2(...args) {
  let result = 0;
  for (const value of args) {
    result += value;
  }
  return result;
}

function sum3(...args) {
  let result = 0;
  let i = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
}

function sum4(...args) {
  let result = 0;
  let i = 0;
  if (args.length === 0) return 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
}

function sum5(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum1(1, 2, 3));
console.log(sum2(0));
console.log(sum3());
console.log(sum4(1, -1, 1));
console.log(sum5(10, -1, -1, -1));