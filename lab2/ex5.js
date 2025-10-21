const phoneBookArray = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Gaius Julius Caesar', phone: '+380667778899' },
  { name: 'Lucius Seneca', phone: '+380935553322' }
];

function findPhoneByNameArray(name) {
  for (const record of phoneBookArray) {
    if (record.name === name) return record.phone;
  }
  return 'Not found';
}

console.log(findPhoneByNameArray('Lucius Seneca'));
