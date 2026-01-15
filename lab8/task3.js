function enforceType(fn, ...types) {
  return (...args) => {
    for (let i = 0; i < args.length; i++) {
      const expected = types[i].name.toLowerCase();
      if (typeof args[i] !== expected) {
        throw new TypeError(`Argument at index ${i} must be ${expected}`);
      }
    }
    
    const output = fn(...args);
    const resultType = types[types.length - 1].name.toLowerCase();
    
    if (typeof output !== resultType) {
      throw new TypeError(`Result must be ${resultType}`);
    }
    
    return output;
  };
}

const multiply = (a, b) => a * b;
const safeMultiply = enforceType(multiply, Number, Number, Number);
console.log(safeMultiply(10, 5));

const combine = (s1, s2) => s1 + s2;
const safeCombine = enforceType(combine, String, String, String);
console.log(safeCombine('Hello ', 'World!'));