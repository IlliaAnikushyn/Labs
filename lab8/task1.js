function processObject(source, action) {
  const keys = Object.keys(source);
  for (const key of keys) {
    const value = source[key];
    action(key, value, source);
  }
}

const inventory = { apples: 5, oranges: 12, bananas: 8 };

processObject(inventory, (name, count) => {
  console.log({ name, count });
});