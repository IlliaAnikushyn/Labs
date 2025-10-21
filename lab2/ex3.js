function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  const results = [];
  for (let i = 0; i <= 9; i++) {
    const s = square(i);
    const c = cube(i);
    const avg = average(s, c);
    results.push(avg);
    console.log(`i=${i}, square=${s}, cube=${c}, average=${avg}`);
  }
  return results;
}

console.log('Calculation results:', calculate());
