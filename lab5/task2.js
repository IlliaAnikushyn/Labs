function array() {
  const elements = [];
  const get = (i) => elements[i];

  get.push = (value) => elements.push(value);
  get.pop = () => elements.pop();

  return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0));
console.log(arr(1));
console.log(arr(2));

console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());
console.log(arr.pop());