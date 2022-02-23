// Take an object with your mothers name and your age. now create an object for your sibling by age diffrence
const person = {
  name: "Mugdha",
  age: 20,
};
const sibling = {
  ...person,
  age: person.age - 2,
};
console.log(person);
console.log(sibling);
//-------------------------------------------------------------------------------

// take an array with 5 colors. create another array by adding two more colors to it
const colors = ["red", "yellow", "pink", "brown", "black"];
const moreColors = [...colors, "aqua", "green"];
console.log(colors);
console.log(moreColors);
//-------------------------------------------------------------------------------

//write a function birthday() to take a persons name and age in an object and increase the age
const birthday = (person) => ({
  ...person,
  age: person.age + 1,
});
console.log(birthday(person));
//-------------------------------------------------------------------------------

// write a function which can tell whether a number is less than 10 or not. supply this function to array.filter() to get an array with no 10s in it.
const numberArray = [1, 3, 10, 50, 45, 31, 67, 7];
const noLessThanTen = (num) => num < 10;
console.log(numberArray.filter(noLessThanTen));
//-------------------------------------------------------------------------------

//given an array of numbers return an object for each item
const returnObj = (num) => ({
  num,
});
numberArray.forEach(returnObj);
console.log(numberArray.map(returnObj));
//-------------------------------------------------------------------------------

//given an array of numbers calculate the sum
const calculateSum = (initial, current) => initial + current;
console.log(numberArray.reduce(calculateSum, 0));
//-------------------------------------------------------------------------------

// create a function which takes your name and returns a function which would add your name to anything that function calls
const giveYourName = (name) => (msg) => `${name} ${msg}`;
const dhruvSays = giveYourName("Dhruv says");
console.log(dhruvSays("Hello"));

// write a function which can log any text with your username. another function which can work any text with your userID. Now compose both functions to give one fucntion which can log any text with both username + userID.
const username = (text) => `Username is Bollu and ${text}`;
const userId = (text) => `UserId is 1234 and im saying ${text} `;
const composeUser = (text) => username(userId(text));
console.log(composeUser("hi"));
//-------------------------------------------------------------------------------

//find the sum of all numbers at odd indices
const indexOdd = (arr, index) => (index % 2 === 0 ? arr + 1 : arr);
console.log(numberArray.map(indexOdd));
//-------------------------------------------------------------------------------

//find the sum of even numbers
const evenSum = (sum, num) => (num % 2 === 0 ? num + sum : sum);
console.log(numberArray.reduce(evenSum, 0));
//-------------------------------------------------------------------------------

// return an object with sum of all odd numbers and even numbers seperatly
const oddEvenObj = {
  even: 0,
  odd: 0,
};
const reducer = (oddEvenObj, num) =>
  num % 2 === 0
    ? {
        ...oddEvenObj,
        even: oddEvenObj.even + num,
      }
    : {
        ...oddEvenObj,
        odd: oddEvenObj.odd + num,
      };
console.log(numberArray.reduce(reducer, oddEvenObj));
//-------------------------------------------------------------------------------

// return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one
const evenoddNumber = (num) => (num % 2 === 0 ? num + 1 : num - 1);
console.log(numberArray.map(evenoddNumber));
//-------------------------------------------------------------------------------

// find the number divisible by 10
const divisibleByTen = (num) => num % 10 === 0;
console.log(numberArray.filter(divisibleByTen));
//-------------------------------------------------------------------------------

// find the biggest number in an array
const biggestNumber = (initial, current) =>
  initial > current ? initial : (initial = current);
console.log(numberArray.reduce(biggestNumber, 0));
//-------------------------------------------------------------------------------

//return an array of objects with key as an item and value as number of characters in the string
const fruitArray = ["apple", "orange", "mango", "papaya", "cry"];
const objectAsKey = (item) => ({
  [item]: item.length,
});
console.log(fruitArray.map(objectAsKey));
//-------------------------------------------------------------------------------

// find the number of strings with similar number of characters
const stringReducer = (acc, curr) =>
  curr.length in acc
    ? {
        ...acc,
        [curr.length]: acc[curr.length] + 1,
      }
    : {
        ...acc,
        [curr.length]: 1,
      };

console.log(fruitArray.reduce(stringReducer, {}));
//-------------------------------------------------------------------------------

//the one question
const add = (num) => num + 1;
const square = (num) => num * num;
const minus = (num) => num - 2;

const reducer1 = (initial, current) => current(initial);
const infiniteFunctions = (num, ...args) => args.reduce(reducer1, num);

console.log(infiniteFunctions(4, add, square, minus, add, minus));
//-------------------------------------------------------------------------------

//return an array with strings
const forVowels = ["apple", "orange", "mango", "papaya", "cry", "fry", "sync"];
const vowelArr = ["a", "e", "i", "o", "u"];

const isVowelStr = (str) =>
  vowelArr.filter((ch) => str.includes(ch)).length === 0 ? false : true;

console.log(forVowels.filter((str) => isVowelStr(str)));

// asyn bang bang
let interval;
const time = (num, msg) => {
  interval = setInterval(() => {
    if (num === 0) {
      console.log(msg);
      clearInterval(interval);
    } else {
      console.log(`${num--}`);
    }
  }, 1000);
};

console.log(time(10, "hi"));
