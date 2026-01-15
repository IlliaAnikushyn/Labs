function filterDuplicates(inputArray) {
  return [...new Set(inputArray)];
}

const numbersList = [5, 5, 2, 8, 2, 9];
console.log(filterDuplicates(numbersList));

const stackTags = ['js', 'html', 'js', 'css', 'html'];
console.log(filterDuplicates(stackTags));