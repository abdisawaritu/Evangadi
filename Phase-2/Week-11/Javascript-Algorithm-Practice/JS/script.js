// const { cacheSignal } = require("react");

// very easy Question
function adder(number1, number2) {
  // validation is required
  let sum = number1 + number1;
  return sum;
}
function incNumber(num) {
  if (Number.isInteger(num)) {
    num++;
    return num;
  } else {
    return " please provide the valid  integer number ";
  }
}
console.log(incNumber(0));
console.log(incNumber(9));
console.log(incNumber(-3));
console.log(incNumber(9.5));

// 1 year  = 365 days ;
const ageToDayConverter = (age) => {
  if (Number.isInteger(age) && age >= 0) {
    let day = age * 365;
    return day;
  } else {
    return " please provide valid age numbers ";
  }
};
console.log(ageToDayConverter(65));
console.log(ageToDayConverter(0));
console.log(ageToDayConverter(20));

function calculator(expression) {
  return eval(expression);
}
console.log(calculator("23+4")); // 27
console.log(calculator("45-15")); // 30
console.log(calculator("13+2-5*2")); // 5
console.log(calculator("49/7*2-3")); // 11
// eval("console.log('hello, world')");

function arrangment(num) {
  if (Number.isInteger(num) && num > 0) {
    return Math.pow(2, num);
  } else {
    return "please provide valide integer number ";
  }
}
console.log(arrangment(1));
console.log(arrangment(3));
console.log(arrangment(10));

function imposterFormula(imposter, playerCount) {
  return `"${Math.round(100 * (imposter / playerCount))}%"`;
}
console.log(imposterFormula(1, 10)); // "10%"
console.log(imposterFormula(2, 5)); //  "40%"
console.log(imposterFormula(1, 8)); //"13%

const isLeapYear = (year) => {
  if (Number.isInteger(year) && year >= 0) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 1000 !== 0)) {
      return true;
    } else {
      return false;
    }
  } else {
    return "please provide the valid number years ";
  }
};
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(1968));
console.log(isLeapYear(1000.5));

function numberOfStickers(n) {
  return 6 * Math.pow(n, 2);
}
console.log(numberOfStickers(3));

function firstElement(array) {
  return array[0];
}
console.log(firstElement([1, 2, 3, 4, 4]));

// electrical power calculator
function power(voltage, current) {
  return voltage * current;
}
function maximamEdgeOfTriange(side1, side2) {
  if (
    Number.isInteger(side1) &&
    Number.isInteger(side2) &&
    side1 > 0 &&
    side2 > 0
  ) {
    return side1 + side2 - 1;
  } else {
    return "please provide the valid positive integer numbers";
  }
}

console.log(maximamEdgeOfTriange(8, 10));
console.log(maximamEdgeOfTriange(-1, 10));

// there is a single operator in js  capable of providing the reminder of the division operator that is the modulo operator (%)

const remainder = (dividend, divisor) => {
  // validate wheather the input are negative integers
  return dividend % divisor;
};

function nameString(string) {
  return `"  ${string}Edabit"`;
}

// Easy Question

// Js bitwise operator
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 4);
console.log(~5);
//  <<  left shift
//  >>   right shift
//   >>> zero fill right shift
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(20 >> 1);

console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));
console.log((5).toString(2));
console.log((6).toString(2));
console.log((7).toString(2));
console.log((8).toString(2));

console.log((1).toString(2).padStart(8, "0"));
console.log((5).toString(2).padStart(8, "0"));
console.log((10).toString(2).padStart(8, "0"));
console.log((15).toString(2).padStart(8, "0"));
console.log((255).toString(2).padStart(8, "0"));
console.log((255).toString(2).padStart(8, "0"));

// function bitwiseOperator(num1, num2) {
//   let binary1 = num1.toString(2).padStart(8, "0");
//   let binary2 = num2.toString(2).padStart(8, "0");
//   // console.log(binary1);
//   // console.log(binary2);
//   return `${binary1 & binary2.toString().padStart(8,"0")} ${binary1 | binary2} ${binary1 ^ binary2}`;

// }
// console.log(bitwiseOperator(6, 23));
function bitwiseOperator(num1, num2) {
  let binary1 = num1.toString(2).padStart(8, "0");
  let binary2 = num2.toString(2).padStart(8, "0");

  let andResult = (num1 & num2).toString(2).padStart(8, "0");
  let orResult = (num1 | num2).toString(2).padStart(8, "0");
  let xorResult = (num1 ^ num2).toString(2).padStart(8, "0");

  return `
num1: ${binary1}
num2: ${binary2}

AND: ${andResult}
OR:  ${orResult}
XOR: ${xorResult}
`;
}

console.log(bitwiseOperator(6, 23));

function addUntilNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUntilNum(4));

// left shift operator

//number << positions

function shiftToLeft(number, position) {
  return number * Math.pow(2, position);
}

// function findSmallestAndLargest(array) {
//   let sortedArray = array.sort(function (a, b) {
//     return a - b;
//   });
//   let MandM = [sortedArray[0], sortedArray[sortedArray.length - 1]];
//   return MandM;
// }
// console.log(findSmallestAndLargest ([1,2,3,4,5]))

function maxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let minmax = [min, max];
  return minmax;
}

console.log(maxMin([1, 3, 4, 5, 7, 8, 10]));

function timeForMilkAndcookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}

// function whichIsLarger (  ( ) => a , () => b){

// }
// Higher order function and callback function
// Important points on these topics
// arrow function makes the callbacks shorter
// higher order function  and callback function     (from the Js advanced concepts )
// // In Javacript the function can be used as values(i.e it can be stored on the variable, passed as argument, and returned from the function )
// function greet() {
//   console.log("helloo");
// }
// // storing the function on the vairables.
// const myFunction = greet; // storing the function itself not calling thefunction like that of the  greet ();
// const a = greet(); // calling the function and storing the returned values on the varialbe

// //
// // function add ( a, b ){
// //   return a + b ;
// }

// function execute (operation ){
//    operation ();
// }
// function sayHello(){
//    console.log("Hello");
// }

// execute (sayHello);

// // callback function
// function sayHello() {
//   // callback
//   console.log("Hello");
// }
// // function execute(callback) {
// //   // higher order function
// //   callback();
// }
// execute(sayHello);

// // callback with arguments
// function double(number) {
//   return number * 2;
// }

// function process(number, callback) {
//   return callback(number);
// }
// console.log(process(5, double));
// // execution
// process(5, double)
//        ↓
// number = 5
// callback = double
//        ↓
// callback(5)
//        ↓
// double(5)
//        ↓
// 10

// function square(number) {
//   return number ** 2;
// }

// function calculate(number, callback) {
//   return callback(number);
// }
// console.log(calculate(5, square));

// anonymous Callback functions
// function double(number) {
//   return number * 2;
// }
// process(5, double);

// Process(5, function (number) {
//   return number * 2;
// });  // here the call back is created directly where its needed

// arrow function callbacks

// process(5, function (number) {
//   return number * 2;
// });
// // instead we write this uisng the arrow function
// process(5, (number) => {
//   return number * 2;
// });

// process(5, (number) => number * 2); // return statement and  the curlbrace can be ommitted if we havae one statemetn insde the function

function add(a, b) {
  return a + b;
}
function substract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
  return operation(a, b);
}

calculate(10, 5, add);
calculate(10, 5, substract);
calculate(10, 5, multiply);

// Array Object  built in Higher order function
// map();
// filter();
// reduce();
// forEach();
// find();
// findIndex();
// some();
// every();
// sort();

// setTimeout(function () {
//   console.log("Hello");
// }, 2000);  // execure this function after approximately 2 seconds
// returning a function
// examples

function createGreeting() {
  return function () {
    console.log("hello");
  };
}
createGreeting();

function createMultiplier(multiplier) {
  return function (number) {
    return number * multiplier;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));

// advanced Js conceps Called Closure  ( very important concepts in js );

// Anonymous Callback Function is Js

// named callback function ->   anonymous callback  and later into arrow function

// ordinary function
function doubles(number) {
  return doubles * 2;
}

function whichIsLarger(f, g) {
  const resultF = f();
  const restutG = g();

  if (resultF > restutG) {
    console.log("f");
  } else if (restutG > resultF) {
    console.log("g");
  } else {
    console.log("neither");
  }
}
whichIsLarger(
  () => 5,
  () => 10,
);
whichIsLarger(
  () => 15,
  () => 10,
);
whichIsLarger(
  () => 5,
  () => 5,
);

//  Regual Expression RegExp  //
// a regular expression describes a pattern that we want to find inside a string .
// can be created by using two method
// 1 . using the  RegEx  literal
//   const pattern = /hello/;
// 2. using  RegExp constructor
// example   const pattern = new RegExp ("hello");
// RegEx  method
// test ()  match()  search ()
// replace() ,  split ( . )
// is the pattern used to search for , match , or validate text
// find the digit    /\d/   finding the digits that match the given string rather than  manully checking charater by character
// finding the exact sequence  / abc /
//   \d any digit from 0 to 9
//  /d\d   to match exactly two digits
//   /d {2}  match exaclty 2 occurrence of the prededing pattern.   09 , 23, 23, 99
// 09:00     in regEx    /d{2}:/d{2}  it can match 00:00 ;   24:99 , 12:45
// \b  word boundary
// is used to indicate a transition betwen
// a word charater  and  a non-word character  or viseversa
//  /\bcat\b/   can match a cat is here
// ^  is beginning of the string.  /^\d/  mean the string must begin with a digit
// $ end of the string
// /\d$/;   the string must end with a digit

const string = "Breakfast at 09:00 in the room 123:456.";
const regex = /(?<!\d)\d{2}:\d{2}(?!\d)/; // interms of the regualr expression

function numberSquare(number) {
  // mathematically formula  numberSquares (n)  = n (n+1)  (2n + 1 ) / 6
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return Math.pow(number, 2) + numberSquare(number - 1);
  }
}
console.log(numberSquare(2));

const seriesResistance = (array) => {
  // validation is required the input must be array of number valid number
  let sumOfSeriesRes = 0;
  for (let i = 0; i < array.length; i++) {
    sumOfSeriesRes += array[i];
  }
  return sumOfSeriesRes;
};
console.log(seriesResistance([1, 5, 6, 3]));
console.log(seriesResistance([16, 3.5, 6]));

function hexToBinary(hex) {
  let binary = parseInt(hex, 16).toString(2);
  console.log(binary);
}
hexToBinary("2F");
// objects
// let Person = {

// }
class PersonConstructor {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.agecompare = function (otherPerson) {
      if (otherPerson.age > this.age) {
        return `${otherPerson.name} is older than me`;
      } else if (otherPerson.age < this.age) {
        return `${otherPerson.name} is  younger than me`;
      } else {
        return `${otherPerson.name} is the same age as me.`;
      }
    };
  }
}
let person1 = new PersonConstructor("samuel", 24);
let person2 = new PersonConstructor("joel", 36);
let person3 = new PersonConstructor("lilly", 24);

console.log(person1.agecompare(person2));
console.log(person2.agecompare(person1));

// Question how to cost an array of objects in js
// sortin an array of objects by values of objects propties in js
// js array sort
let drinks = [
  { name: "lemonade ", price: 50 },
  { name: "lime", price: 10 },
]; // instead of creating objects separately we push them inside one array
// to access elements of differen array
// array[index]  // to access array
// array[index].propery  // used to get the property
// array.sort((a, b) => a.property - b.property);  to sort by numeric property

// array[index][variable ]
// use case
// REST APIs
// databases
// JSON
// React
// Node.js
// Express
// frontend tables
// product lists
// user lists
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 45000,
    category: "Computer",
  },
  {
    id: 2,
    name: "Keyboard",
    price: 1500,
    category: "Accessories",
  },
  {
    id: 3,
    name: "Mouse",
    price: 800,
    category: "Accessories",
  },
];

[
  {
    id: 1,
    name: "Abdisa",
    age: 22,
  },
  {
    id: 2,
    name: "Samuel",
    age: 24,
  },
];

const sortDrinkByPrice = (drinks) => {
  return drinks.sort(function (a, b) {
    // a and b are the objects from the given array
    return a.price - b.price;
  });
};
console.log(sortDrinkByPrice(drinks));

// note that One important point: sort() changes the original array. So after calling it, products itself is now sorted.
// spread operator  ...  to expand or to unpack the array

const numbers = [1, 2, 3];
console.log([...numbers]); // unpack the elements  1 2 3
console.log(numbers);

// spread operator is used to combine the array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; // if we want to combine the array
const result = [...arr1, ...arr2];
console.log(result);
// add elements while spreading
const results = [1, ...numbers, 5];
console.log(results);
// coying the array
// shallow copy

const copy = [...numbers];
copy.push(4);
console.log(copy);
// spread with objects  spread operator with objects
const person = {
  name: "abidsa",
  age: 22,
};

const person4 = {
  ...person,
};
console.log(person4);

// add and change propeties
const updatePerson = {
  ...person,
  age: 23,
};

// used to combining the objects like the same as array combingin
const student = {
  departement: "Computer Engineering ",
  university: "AAU",
};
const profile = {
  ...person,
  ...student,
};
console.log(profile);

// spread with function argumetn
function add(a, b, c) {
  return a + b + c;
}
console.log(add(...numbers));

// spread with Math.max() and Math.mix()

const num = [10, 25, 7, 40, 15];
console.log(Math.max(...num));
// spread with strings

const word = "hello";
console.log(...word); // string spread over the individual character of the given string

//  Rest  operator
// collects multiple values into an array

function sum(...numbers) {
  console.log(numbers);
}
//  sum (10, 20, 30 )  - > numbers - > [ 10, 20 ,30];

// Syntax	Concept	Direction
// ...array	Spread	unpack
// ...parameters	Rest	collect

// ...
// ask yourself:

// Am I spreading existing values out, or am I collecting values together?
// Rest operator

const mixArray = (array1, array2) => {
  if (array1.length !== 2) {
    return "please provide the array with only two elements ";
  } else {
    let mixedArray = [array1[0], ...array2, array1[array1.length - 1]];
    return mixedArray;
  }
};
let mixedArr = mixArray(
  [
    [1, 2],
    [5, 6],
  ],
  [[3, 4]],
);
console.log(mixedArr);

// Rest Operator (...)  almost oposite of the spread operator
// as sytacx it used three dots (...)

// rest operator collects multiple values and puts them into a single array

// spread    array ->     indiviual values
// rest     individual  vales - >  array

function numberss(...values) {
  console.log(values);
}
numberss(10, 20, 30, 40); // collects all the argument into the array
// we use this rest operator if we dont know how many arguments a function will receive ;
function sums(...numbers) {
  // numbers is an array
}
sum(10, 20);
sum(10, 20, 30);
sum(10, 20, 30, 40, 50, 60); // all of the arguments are collected inot numbers.
// sum of any number of values
function sumss(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}
// when we call the function the rest paramter create something like th    numbers = [10, 20, 30, 40]

// rest with normal paramter
function studentssss(name, ...scores) {
  console.log(name);
  console.log(scores);
}
studentssss("Abdisa", 80, 90, 75, 95);

// first argument → normal parameter
// remaining arguments → rest parameter
// name
//  ↓
// "Abdisa"

// scores
//  ↓
// [80, 90, 75, 95]
// function introduce(name, age, ...hobbies) {
//   console.log(name);
//   console.log(age);
//   console.log(hobbies);
// }


// 6. Rest and the arguments Object
function test() {
  console.log(arguments);
}
// rest with destruction  destrcuturing  and array destructuring 
// rest with objects 
// rest vs spread 

// // Right now:
// Promise → pending

// After operation succeeds:
// Promise → fulfilled → "Data received"

// If operation fails:
// Promise → rejected → error
// Promise has three states

// A Promise can have three states.

// 4.1 Pending

// Initially:

// Promise
//    ↓
// pending

// It means:

// The asynchronous operation hasn't finished yet.

// 4.2 Fulfilled

// If the operation succeeds:

// Promise
//    ↓
// fulfilled
//    ↓
// "Data received"

// The Promise has successfully produced a value.

// 4.3 Rejected

// If something goes wrong:

// Promise
//    ↓
// rejected
//    ↓
// error

// The Promise has failed.

// So:

//                  Promise
//                     |
//           ┌─────────┴─────────┐
//           ↓                   ↓
//       fulfilled            rejected
//           ↓                   ↓
//        result               error

// There is also the initial state:

// pending
const promise = new Promise(() => {});

// What is the executor?

// The executor is the function that you pass to the Promise constructor.

// For example:

// const promise = new Promise(() => {
  // const promise = new Promise();


// });

// This:
