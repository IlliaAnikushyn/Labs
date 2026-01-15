const pipe = (...fns) => {
  for (const f of fns) {
    if (typeof f !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return (x) => fns.reduce((v, f) => f(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));

try {
  const f2 = pipe(inc, 7, cube);
} catch (e) {
  console.log(e.message);
}