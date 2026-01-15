function findMismatch(primarySet, secondarySet) {
  return primarySet.filter(item => !secondarySet.includes(item));
}

const val1 = [7, -2, 10, 5, 0];
const val2 = [0, 10];
console.log(findMismatch(val1, val2));

const euroCities = ['Kyiv', 'Lviv', 'Warsaw'];
const otherCities = ['Warsaw', 'London', 'Berlin'];
console.log(findMismatch(euroCities, otherCities));