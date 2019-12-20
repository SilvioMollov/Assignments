const functionOne = (name, age = 5) => {
  console.log(name, age);
  console.log('This is ' + name + ' and his age is:' + age);
};
functionOne('Silvio');

function functionTwo() {
  console.log(`Hello ${name}`);
}
functionTwo('Silvio');

const functionThree = name => alert(`Hi ` + name);

functionThree('Silvio');

function checkInput(cb, ...strings) {
  let checkText = false;
  for (const text of strings) {
    if (!text) {
      checkText = true;
      console.log('there is an empty string')
      break;
    }
  }
  if (checkText = false) {
    cb();
  }
}

checkInput(() => {
  console.log('all strings are full');
},
'asdad',
'asdasddd',
'asdasd'
);