function fn() {
  const constObj = { name: 'Marcus' };

  let varObj = { name: 'Aurelius' };

  constObj.name = 'Antoninus';
  varObj.name = 'Verus';

  console.log('Changed fields:', constObj, varObj);

  varObj = { name: 'New' }; 

  console.log('After reassign:', varObj);

}

fn();

function createUser(name, city) {
  return { name, city };
}

console.log(createUser('Marcus Aurelius', 'Roma'));
