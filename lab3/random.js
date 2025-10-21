function random(min, max) {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min)) + min;
}

console.log('Random [0,10):', random(10));
console.log('Random [5,15):', random(5, 15));
