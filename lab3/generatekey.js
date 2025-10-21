function generateKey(length, characters) {
  let key = '';
  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length);
    key += characters[index];
  }
  return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);
console.log('Generated key:', key);
