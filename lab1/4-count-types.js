const values = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  null, undefined, { a: 1 }, [1, 2, 3], 3.14, Symbol('id'), () => {}
];

const typeCounts = {};

for (const item of values) {
  const type = item === null ? 'null' : typeof item;
  
  if (!(type in typeCounts)) {
    typeCounts[type] = 0;
  }

  typeCounts[type]++;
}

console.log(typeCounts);
