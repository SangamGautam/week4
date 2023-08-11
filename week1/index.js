"use strict"

//Task 2
console.log("Hello World, Node.js!");
console.log("----")

let array = [15, 12, 99, 36, 19];
console.log(array);
console.log("----")

array.push(20);
console.log(array);
console.log("----")

array.unshift(105);
console.log(array);
console.log("----")

array.splice(2, 0, 17);
console.log(array);
console.log("----")

array.pop();
console.log(array);
console.log("----")

array.splice(1, 1);
console.log(array);
console.log("----")

array[4] = 100;
console.log(array);
console.log("----")

let newArray = array.map(num => num * 2);
console.log(newArray);
console.log("----")

let sum = array.reduce((total, num) => total + num, 0);
console.log(sum);
console.log("----")

//Task 3

let peopleObject = {
    people: [
        { username: 'user1', password: 'password1' },
        { username: 'user2', password: 'password2' },
        { username: 'user3', password: 'password3' }
    ]
};

console.log(peopleObject);
console.log("----")

let jsonString = JSON.stringify(peopleObject);
console.log(jsonString);
console.log("----")

let parsedObject = JSON.parse(jsonString);
console.log(parsedObject);
console.log("----")

//Task 4

const prompt = require('prompt');
const packageJson = require('./package.json');

prompt.start();

prompt.get(['number1', 'number2'], function (err, result) {
  if (err) {
    return console.log(err);
  }
  
  const num1 = Number(result.number1);
  const num2 = Number(result.number2);

  if (isNaN(num1) || isNaN(num2)) {
    console.log('Please enter valid numbers.');
    return;
  }

  const sum = num1 + num2;
  console.log(`Sum of numbers is ${sum}`);
  console.log('Version of prompt dependency is ' + packageJson.dependencies.prompt);
});
console.log("----")

// Task 5

// Arrow

// let convUpperCase = (value) => {
//     return value.toUpperCase();
//   }
  
//   console.log(convUpperCase("Hello World")); // Outputs: "HELLO WORLD"
  
  
// simplified arrow function

let convUpperCase = value => value.toUpperCase();

console.log(convUpperCase("Hello World")); // Outputs: "HELLO WORLD"
