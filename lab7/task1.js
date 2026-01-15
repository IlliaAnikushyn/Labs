function dropValue(source, target) {
  const position = source.indexOf(target);
  if (position !== -1) {
    source.splice(position, 1);
  }
}

const scores = [10, 20, 30, 40, 50];
dropValue(scores, 30);
console.log(scores);

const capitals = ['Kyiv', 'Lviv', 'London', 'Paris'];
dropValue(capitals, 'London');
dropValue(capitals, 'Berlin');
console.log(capitals);