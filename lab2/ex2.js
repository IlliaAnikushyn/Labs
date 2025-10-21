function range(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function rangeOdd(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) result.push(i);
  }
  return result;
}

console.log('Range:', range(15, 30));
console.log('Odd Range:', rangeOdd(15, 30));
