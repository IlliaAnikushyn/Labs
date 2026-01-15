function persist(initialValue) {
  return function() {
    return initialValue;
  };
}

const getValue = persist(42);
const result = getValue();
console.log(result);