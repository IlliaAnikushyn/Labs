const compose = (...fns) => {
  const handlers = [];
  
  const f = (x) => {
    let res = x;
    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }
      return res;
    } catch (e) {
      handlers.forEach(h => h(e));
      return undefined;
    }
  };

  f.on = (name, handler) => {
    if (name === 'error') handlers.push(handler);
  };

  return f;
};

const inc = x => ++x;
const twice = x => x * 2;
const fail = () => { throw new Error('Something went wrong'); };

const f = compose(inc, twice);
console.log(f(5));

const fSafe = compose(inc, fail, twice);
fSafe.on('error', (e) => console.log('Caught error:', e.message));
console.log(fSafe(5));