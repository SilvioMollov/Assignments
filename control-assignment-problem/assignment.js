const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const otherRandomNumber = Math.random();
let number = 0.7;

if (
  ((randomNumber && otherRandomNumber > number) ||
    randomNumber <= 0.2 ||
    otherRandomNumber <= 0,2)
) {
  alert('This number is greater than 0.7! ');
} else {
  alert('try again');
}
console.log(randomNumber);
console.log(otherRandomNumber);

//for loop backwords
const numbers = [1, 2, 3, 4, 5, 6];

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (const num of numbers) {
  console.log(num);
}

numbers.forEach(i => console.log(i));
