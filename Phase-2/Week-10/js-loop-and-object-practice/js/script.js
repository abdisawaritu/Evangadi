/* Decision loop  and Object Oriented Programming */
// for loop  is the programming structure that repeatedly exectues a block of code as long as the conidtion is true
/*  a loop is a way to execute the same code multiple times without writing it repeatedly*/
// for ( initialization ;  condition ; update(increment )){code to repeat}

// const { cacheSignal } = require("react");

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// for loop
for (let i = 1; i <= 5; i++) {
  // console.log("hello");
  console.log(i);
}

// for loops with arguments  giving the starting points  and ending points  used for the differetn values of the  start and ending  of th loop  which is dynamically  change the starting poing and endding points of the loop using the function
function forLoopArg(start, end) {
  for (let i = start; i < end; i++) {
    console.log(i);
  }
}
console.log(forLoopArg(2, 5));

// we use  for loop  when we know how many times you need to repeat

// while loop  repeats as long as a condition is true
// while ( condition ){ repeated code}
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// // Step 1: Initialization
// // let variable = startingValue;

// // Step 2: Condition
// while (condition) {
//   // Step 3: Work to repeat
//   // statements

//   // Step 4: Update
//   variable++;
// } // we use while loop when the number of repeation is unknowns  iniliztion  ousdie the body  global variable
// we use  when you dont  know in advance how many iterations are needed .

// do... while loop  always exectes at least once.   do { code   }   while ( condition )

// for ...of loop is used to iterate over values in a iterable.
const fruits = [" apple ", " banana", " orange "];
for (const fruit of fruits) {
  console.log(fruit);
}
// we use this loop for the array , strings , maps and sets
// for...in loop
// its used to iterate over property names ( keys ) of the object
const Student = {
  name: " abdisa ",
  age: 22,
  city: " addis ababa",
};
for (const key in Student) {
  console.log(key);
  // is when working with objects and you want thier property names.
}
for (i = 1; i <= 10; i++) {
  console.log(" welcome");
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }
for (let i = 0; i <= 2; i++) {
  // by using the default browser
  console.log(i);
}

for (let i = 10; i >= 0; i--) {
  console.log(i);
}
console.log(" happy new year 😂😂 🎉🎉");

// let number = [1, 2, 3, 4, 5];
// // console.log(number[0])
// // console.log(number[1]);
// // console.log(number[2]);
// // console.log(number[3]);
// // console.log(number[4]);

// for (let index = 0; index < number.length; index++) {
//   console.log(number[index]);
// }

// infinite loop  to tackle we use default browser  to check the condition
// break statement   used to exit the loop immeditely regardless of the  the looop condition
// continue statement  skip the current iterations  then continue the execction as normally

let number = [1, 3, 6, 10, 12];
for (let i = 0; i < number.length; i++) {
  if (number[i] == 10) {
    continue;
  }
  console.log(number[i]);
}

// while loop

if (true) {
  // execute and finish
}

// let  i = 0 ;   // initiliazation
// while ( i<=5 ){
//     console.log("hello")
//     i++;  // update  very important to avoid the infinite loop
// }
let count = 0;

do {
  console.log("count is :" + " " + count);
  count++;
} while (count <= 5);

//

do {
  console.log(i);
  i++;
} while (false);

const adderUp = (numbers) => {
  // check if the input is number
  if (!Number.isFinite(numbers)) {
    return " please provide the valid numbers";
    //  check if  the input is non negative
  } else if (numbers < 0) {
    return " enter the positive number ";
  } else {
    let sum = 0; // variable to store the sum of the  numbers
    for (i = 1; i <= numbers; i++) {
      sum = sum + i; // sum+= i
    }
    return (
      " the sum of the number starting from 1  until " +
      " " +
      numbers +
      " is " +
      " " +
      sum // I have to use the temperal liter ${} for the modern js
    );
  }
};
let result = adderUp(13);
console.log(result);
console.log(adderUp(4));
console.log(adderUp(600));

const adderUpTo = (numbers) => {
  // check if the input is number
  if (!Number.isFinite(numbers)) {
    return " please provide the valid numbers";
    //  check if  the input is non negative
  } else if (numbers < 0) {
    return " enter the positive number ";
  } else {
    return (numbers * (numbers + 1)) / 2;
  }
  console.log(adderUpTo(4));
  console.log(adderUpTo(600));
};

// object oriented programming in js

/* OOP  object oriented data model */
//creating object  using the object literal

let array = [1, 2, 3, 4, 5];

let object = {
  // key: value pair
  melaya1: 1,
  melaya2: "8",
  melaya3: 8,
};
console.log(object.melaya1);
console.log(object["melaya2"]);

// custom object

let Abebe = {
  firstName: "abebe", // key:value pair   key as index the same things with the array accessing
  lastName: " kebede",
  age: 23,
  abeFunc: function () {
    console.log("abebe beso bela");
  },
};
console.log(Abebe.age);
console.log(Abebe.lastName);
console.log(Abebe["firstName"]);
Abebe.abeFunc();
// abeFunc();

let marchBatch = {
  name: "abdisa",
  // group: 2 ,
  class: {
    group: 2,
    batch: ["march ", "april"],
  },
  email: "abdisa@gmail.com",
  getName: function () {
    // we dont use the arrow function we use the tradition function  this keyword is not recogised  by arrow function
    return this.name;
  },
};
// accessing the object  using the dot notation  the most common way of accessin the object
console.log(marchBatch.name);
// accessing using the  bracket notattion
console.log(marchBatch["group"]);
console.log(marchBatch.getName());

console.log(marchBatch.class.batch);

// this.name  the current object

// javascript  constructor
// object constructor   object creating using the constructor method

function Students(fn, ln) {
  this.firstName = fn;
  this.lastName = ln;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
let chala = new Students("abdisa", "waritu ");
console.log(chala);

//instantiation  is the process fo creating an instace or object from a constructor function in oop
// the name  with uppper case
// new keyboard  to create the object from the constrcutor
// this  inside the constrcutor  refers to the new   object which is createed from the constrcutor

class Studentss {
  // modern way of creating object  modern js for creating the object
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.getName = function () {
      return this.name;
    };
  }
}

let student1 = new Studentss("abdi", "abdi@gmail.com");
console.log(student1);

const Car = {
  make: "toyota",
  model: "camry",
  year: 2022,
  color: "blue",
  mileAge: 1500,

  displayInfo: function () {
    return `${this.year} ${this.color} ${this.make} ${this.model} with ${this.mileAge} miles `;
  },
};
console.log(Car.displayInfo());

// blue print for creating the object
// modern way of  creating  js ES6
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.displayInfo = function () {
      return `${this.year} ${this.color} ${this.make} ${this.model} with ${this.mileAge} miles `;
    };
  }
}
let car = new Vehicle("minibus", "rivo ");
console.log(car);

// built in js objects (the most commmon built in js objects ) to  use their built in methods and is js almost everthing is considered as objects  and they have their own
// String   //
// Array    //
// Math     //
// Number    //
// Date ( getters and setters method )
// JSON  //
// RegExp
// Object
// Search
// Iteration
// Sorting
// Conversion
// Map
// Set
// RegExp
// Error
// Browser Objects (DOM)
// DOCUMENT METHOD  ( DIFFERENT METHOD ) //
// ELEMENT  ( DIFFERENT METHOD )  //
// WINDOW   //
// EVENT //
// PROMISE //
// (OBJECT , ARRAY , STRING, JSON , PROMISE , DOCUMENT AND ELEMENT )
// THE COMMONLY USED OBJECTS IN JS  FOR FRONTEND  , REACT , NODE, EXPESS.JS , DOM MANIPULATION AND API DEVELOPMENT

let example = " abebe ";
let examples = new String("abebe");
console.log(examples.length);
console.log(example.toUpperCase());

// Array

let skills = ["html", "css", "js "];
console.log(skills.push("bootstrap"));
console.log(skills);
console.log(skills.pop());
console.log(skills);

// console.log(skills.shift());
// console.log(skills.unshift())
// console.log(skills.slice(1, 4 ))
// console.log(splice())

// map()
// filter()
// find ()   the most commmon method we use at built of an array
// call back funnction
// const found = numbers.find( num => num>3 )
// const filer = number.filter(func)
// console.log(skills.isArray())

// Math.ceil up the nearest intert  .floor  .round .random ,

// for (inilization ; condition ; increment (update )){
//   code to execure each time the conditionis true
// }
// for ( let i = 0 ;  i<5 ; i++){

// }
//nested  object

const student = {
  name: "abdi",
  address: {
    country: "ethiopia ",
    city: "addis ababa",
  },
  skills: ["html", "css", "js"],
};
// accessing the nested object
console.log(student.address.city);
console.log(student);
console.log(student.skills[1]);

// object can contain array
// array can contain an object  and object can contain another object  and array can contain another array

// how to create object is javacript

let objectCreation = {
  //  object creating using the object literal method
  key1: "value1",
  key2: "value2",
  key3: "value3",
  xx: function () {
    console.log("this is the function inside the object");
  },
};
// let arrayCreation = [];
console.log(objectCreation);
console.log(objectCreation.key1);
console.log(objectCreation.xx());
// console.log(arrayCreation);
// everthing is accessed through the  object all the methods and properties that is the object has .  from the object we can access the methods and properties of the object  using the dot notation and bracket notation   with is the same as the array through the index of the array we can access the element of the array using the index of the array  and we can access the methods and properties of the array using the dot notation and bracket notation  with is the same as the object through the key of the object we can access the value of the object using the key of the object  and we can access the methods and properties of the object using the dot notation and bracket notation  with is the same as the array throught it .

let stud = {
  id: 111,
  name: "abebe",
  age: 22,
  study: function () {
    return this.name + " is studying";
  },
  submitAssignment: function () {
    return this.name + " is submitting the assignment";
  },
  fullName: function () {
    return this.name + " " + this.age;
  },
};
console.log(stud["name"]); // bracket accessin similar to the array
console.log(stud.study());
console.log(stud.submitAssignment());
console.log(stud.fullName());

// blueprint for creating the object using the constructor functiin
function Cars(name, model, year) {
  this.name = name;
  this.model = model;
  this.year = year;
  this.start = function () {
    return this.name + " " + this.model + " is starting";
  };
}

let car1 = new Cars("toyota", "camry", 2022);
console.log(car1);
let car2 = new Cars("honda", "civic", 2021);
console.log(car2);
console.log(car1, car2);

car1.mileage = 10000;
console.log(car1);

car2.color = "red";
console.log(car2);

// built in  js objects  ( the most commonly used built in js objects )
// String
// Array

// let  stringObject = new String("abebe");  this is not recommended way of creating the string oject
let stringObject2 = "abebe"; // can inherit the properties and methods of the string object
console.log(stringObject2.length);
console.log(stringObject2.toUpperCase());
stringObject2.toLowerCase();

// we use the algorithm thinking to use the different built in methods of the object to solve the problem and we use the object oriented programming to create the object and use the methods and properties of the object to solve the problem and we use the loop ite

// String
// length
// let name = "abebe";
// console.log(name.length); // password length check
// console.log(name.charAt(0));
// console.log(name.charCodeAt(0));
// console.log(name.indexOf("a"));
// console.log(name.lastIndexOf("b"));

// console.log(name.slice(0, 3));
// console.log(name.substring(1, 3));
// console.log(name.trim()); // to remove the while space from the string

// Array object
// Map();
// filter();
// forEach();
// reduce();
// find();
// some();
// every();
// sortArray()

// Array functional loop , iteration  array functional method iteration / looping

// practice on the  javascript built in methods
// String   predefined objects which are commonly used inside  string objects
// ======================================================
// JAVASCRIPT STRING OBJECT - MOST COMMON BUILT-IN METHODS
// ======================================================

// PROPERTY
// --------

// length
// Purpose: Returns the number of characters in the string.

// ======================================================

// charAt(index)
// Purpose: Returns the character at the specified index.

// at(index)
// Purpose: Returns the character at the specified index.
// Supports negative indexes.

// charCodeAt(index)
// Purpose: Returns the Unicode value of the character.

// codePointAt(index)
// Purpose: Returns the Unicode code point of a character.

// ======================================================

// indexOf(searchValue)
// Purpose: Returns the index of the first occurrence.
// Returns -1 if not found.

// lastIndexOf(searchValue)
// Purpose: Returns the index of the last occurrence.

// includes(searchValue)
// Purpose: Checks whether a string contains the specified text.
// Returns true or false.

// startsWith(searchValue)
// Purpose: Checks whether a string starts with specified text.

// endsWith(searchValue)
// Purpose: Checks whether a string ends with specified text.

// search(pattern)
// Purpose: Searches for text or a regular expression.
// Returns the index or -1.

// ======================================================

// slice(start, end)
// Purpose: Extracts part of a string.
// Supports negative indexes.  from the end to  start and it starts from the the index -1 rather than 0 as normal array index

// substring(start, end)
// Purpose: Extracts part of a string.
// Does NOT support negative indexes.

// substr(start, length)
// Purpose: Extracts characters using a starting position and length.
// Deprecated (avoid using).

// ======================================================

// replace(oldValue, newValue)
// Purpose: Replaces the first matching text.

// replaceAll(oldValue, newValue)
// Purpose: Replaces all matching text.

// ======================================================

// toUpperCase()
// Purpose: Converts all letters to uppercase.

// toLowerCase()
// Purpose: Converts all letters to lowercase.

// toLocaleUpperCase()
// Purpose: Converts to uppercase using locale rules.

// toLocaleLowerCase()
// Purpose: Converts to lowercase using locale rules.

// ======================================================

// trim()
// Purpose: Removes whitespace from both ends.

// trimStart()
// Purpose: Removes whitespace from the beginning.

// trimEnd()
// Purpose: Removes whitespace from the end.

// ======================================================

// split(separator)
// Purpose: Splits a string into an array.

// concat(string)
// Purpose: Joins two or more strings.

// repeat(count)
// Purpose: Repeats the string multiple times.

// ======================================================

// padStart(targetLength, padString)
// Purpose: Pads the beginning of a string.

// padEnd(targetLength, padString)
// Purpose: Pads the end of a string.

// ======================================================

// match(regex)
// Purpose: Returns matches using a regular expression.

// matchAll(regex)
// Purpose: Returns an iterator containing all matches.

// ======================================================

// localeCompare(otherString)
// Purpose: Compares two strings alphabetically.
// Returns:
//   -1  -> before
//    0  -> equal
//    1  -> after

// ======================================================

// normalize()
// Purpose: Normalizes Unicode characters.

// ======================================================

// valueOf()
// Purpose: Returns the primitive string value.

// toString()
// Purpose: Returns the string representation.

// ======================================================

// 1. length          -> Number of characters
// 2. charAt()        -> Character at an index
// 3. at()            -> Character at an index (supports negatives)
// 4. indexOf()       -> First occurrence
// 5. includes()      -> Check if text exists
// 6. startsWith()    -> Check beginning
// 7. endsWith()      -> Check ending
// 8. slice()         -> Extract part of a string
// 9. replace()       -> Replace text
//10. toUpperCase()   -> Convert to uppercase
//11. toLowerCase()   -> Convert to lowercase
//12. trim()          -> Remove spaces
//13. split()         -> Convert string to array
//14. concat()        -> Join strings
//15. repeat()        -> Repeat a string

let names = "abdisa"; // space can be counted as charater
console.log(names.length);
console.log(names.charAt(2));
let stringObj = new String("Hello,World");
console.log(stringObj);
console.log(names.charCodeAt(2));
console.log(names.indexOf("a"));
console.log(names.lastIndexOf("a"));
console.log(names.includes("abdisa"));

console.log(names.startsWith("a"));
console.log(names.endsWith("a"));

console.log(names.lastIndexOf());
console.log(names.slice(0, 3));

console.log(names.substring(0, 4));

console.log(names.split(""));

console.log(names.replace("a", "d"));

console.log(names.toUpperCase());
console.log(names.toLowerCase());
// console.log(names.trim())  to remove the white space from the the string very important during the passoworl when the user unintention add the spacae to remove that space

// Array Object

// ======================================================
// JAVASCRIPT ARRAY OBJECT - MOST COMMON BUILT-IN METHODS
// ======================================================

// ======================================================
// PROPERTIES
// ======================================================

// length
// Purpose: Returns the number of elements in the array.

// ======================================================
// ADDING ELEMENTS
// ======================================================

// push(element)
// Purpose: Adds one or more elements to the end of the array.
// Returns: New length of the array.

// unshift(element)
// Purpose: Adds one or more elements to the beginning of the array.
// Returns: New length of the array.

// splice(start, deleteCount, item1, item2,...)
// Purpose: Add, remove, or replace elements.
// Returns: Removed elements.
// Modifies the original array.

// ======================================================
// REMOVING ELEMENTS
// ======================================================

// pop()
// Purpose: Removes the last element.
// Returns: The removed element.

// shift()
// Purpose: Removes the first element.
// Returns: The removed element.

// splice(start, deleteCount)
// Purpose: Removes elements from a specific position.
// Returns: Removed elements.
// Modifies the original array.

// ======================================================
// COPYING / EXTRACTING
// ======================================================

// slice(start, end)
// Purpose: Returns a portion of the array.
// Does NOT modify the original array.

// concat(array1, array2,...)
// Purpose: Joins two or more arrays.
// Returns: A new array.

// ======================================================
// SEARCHING
// ======================================================

// includes(value)
// Purpose: Checks if an array contains a value.
// Returns: true or false.

// indexOf(value)
// Purpose: Returns the first index of a value.
// Returns: -1 if not found.

// lastIndexOf(value)
// Purpose: Returns the last index of a value.
// Returns: -1 if not found.

// find(callback)
// Purpose: Returns the first element that satisfies a condition.

// findIndex(callback)
// Purpose: Returns the index of the first matching element.
// Returns: -1 if not found.

// ======================================================
// ITERATION
// ======================================================

// forEach(callback)
// Purpose: Executes a function for every element.
// Returns: undefined.

// map(callback)
// Purpose: Creates a new array by transforming each element.

// filter(callback)
// Purpose: Returns a new array containing elements that satisfy a condition.

// reduce(callback, initialValue)
// Purpose: Reduces the array to a single value.

// reduceRight(callback)
// Purpose: Reduces the array from right to left.

// every(callback)
// Purpose: Checks if every element satisfies a condition.
// Returns: true or false.

// some(callback)
// Purpose: Checks if at least one element satisfies a condition.
// Returns: true or false.

// ======================================================
// SORTING
// ======================================================

// sort(compareFunction)
// Purpose: Sorts the array.
// Modifies the original array.

// reverse()
// Purpose: Reverses the order of elements.
// Modifies the original array.

// toSorted(compareFunction)
// Purpose: Returns a sorted copy.
// Does NOT modify the original array.

// toReversed()
// Purpose: Returns a reversed copy.
// Does NOT modify the original array.

// ======================================================
// JOINING / CONVERTING
// ======================================================

// join(separator)
// Purpose: Converts an array into a string.

// toString()
// Purpose: Converts the array to a string.

// valueOf()
// Purpose: Returns the array itself.

// ======================================================
// FLATTENING
// ======================================================

// flat(depth)
// Purpose: Flattens nested arrays.

// flatMap(callback)
// Purpose: Maps each element and flattens one level.

// ======================================================
// FILLING / COPYING
// ======================================================

// fill(value, start, end)
// Purpose: Fills part or all of an array with one value.

// copyWithin(target, start, end)
// Purpose: Copies elements to another position within the same array.

// ======================================================
// CHECKING
// ======================================================

// Array.isArray(value)
// Purpose: Checks whether a value is an array.
// Returns: true or false.

// ======================================================
// CREATING ARRAYS
// ======================================================

// Array.of(...elements)
// Purpose: Creates a new array from arguments.

// Array.from(iterable)
// Purpose: Creates an array from iterable objects or strings.

// ======================================================
// ITERATORS
// ======================================================

// keys()
// Purpose: Returns an iterator of array indexes.

// values()
// Purpose: Returns an iterator of array values.

// entries()
// Purpose: Returns an iterator of index-value pairs.

// ======================================================
// MODERN ARRAY METHODS (ES2023)
// ======================================================

// with(index, value)
// Purpose: Returns a new array with one element replaced.

// toSpliced(start, deleteCount, items)
// Purpose: Returns a modified copy using splice behavior.
// Does NOT modify the original array.

// ======================================================
// END OF ARRAY METHODS
// ======================================================

// ======================================================
// TOP 20 MOST IMPORTANT ARRAY METHODS
// ======================================================

// 1. length
// Purpose: Get number of elements.

// 2. push()
// Purpose: Add element to the end.

// 3. pop()
// Purpose: Remove last element.

// 4. shift()
// Purpose: Remove first element.

// 5. unshift()
// Purpose: Add element to the beginning.

// 6. slice()
// Purpose: Copy part of an array.

// 7. splice()
// Purpose: Add, remove or replace elements.

// 8. concat()
// Purpose: Merge arrays.

// 9. includes()
// Purpose: Check if value exists.

// 10. indexOf()
// Purpose: Find first index of a value.

// 11. find()
// Purpose: Find the first matching element.

// 12. findIndex()
// Purpose: Find the index of the first matching element.

// 13. forEach()
// Purpose: Loop through every element.

// 14. map()
// Purpose: Transform every element.

// 15. filter()
// Purpose: Keep only matching elements.

// 16. reduce()
// Purpose: Combine array into one value.

// 17. every()
// Purpose: Check if all elements satisfy a condition.

// 18. some()
// Purpose: Check if at least one element satisfies a condition.

// 19. sort()
// Purpose: Sort elements.

// 20. reverse()
// Purpose: Reverse the array.

let fruitss = ["apple", "mango ", "banana"];
console.log(fruitss.length);
console.log(fruitss.push("water melon")); // add  at the ends
console.log(fruitss.unshift("avacado")); // add at the beggginng
console.log(fruitss.pop()); // remove from the last
console.log(fruitss.shift());
console.log(fruitss);

// console.log(fruitss.slice(1,3))// to take the part of array the same the string   and returns  part of the array

fruitss.splice(0, 0, "pineapple", "grapes");

console.log(fruitss.includes("banana"));
let vegetable = ["carrot ", "potato"];
console.log(fruitss.concat(vegetable));

// array functional methods  * iteration / looping

console.log(fruitss);
fruitss.forEach((element, index, array) =>  {
  console.log(element, index, array);
});

let numbers = [ 5,6,19,16];
// let results = numbers.reduce(num  =>   num>10);
// let restltsss = numbers.find(function (number){
//   return number>10;
let resultss = numbers.reduce(function( acc , curva){
  return  acc+curva;
})
// })
console.log(resultss);

// some( )  everty ( ) return the boolean value 

console.log(fruitss.sort());
// to  for sorting the number we use the compare function   with call back of the sort function    that takes two vales and return the difference


// ======================================================
// JAVASCRIPT MATH OBJECT - MOST COMMON BUILT-IN METHODS
// ======================================================

// NOTE:
// Math is NOT a constructor.
// You do NOT create it using new Math().
// Use it directly:
// Math.methodName()

// ======================================================
// MATHEMATICAL CONSTANTS
// ======================================================

// Math.PI
// Purpose: Returns the value of π (3.141592653589793).

// Math.E
// Purpose: Returns Euler's number (2.718...).

// Math.SQRT2
// Purpose: Returns the square root of 2.

// Math.SQRT1_2
// Purpose: Returns the square root of 1/2.

// Math.LN2
// Purpose: Returns the natural logarithm of 2.

// Math.LN10
// Purpose: Returns the natural logarithm of 10.

// ======================================================
// ROUNDING METHODS
// ======================================================

// Math.round(number)
// Purpose: Rounds to the nearest integer.

// Math.floor(number)
// Purpose: Rounds DOWN to the nearest integer.

// Math.ceil(number)
// Purpose: Rounds UP to the nearest integer.

// Math.trunc(number)
// Purpose: Removes the decimal part.

// ======================================================
// MINIMUM & MAXIMUM
// ======================================================

// Math.max(...numbers)
// Purpose: Returns the largest number.

// Math.min(...numbers)
// Purpose: Returns the smallest number.

// ======================================================
// POWER & ROOT
// ======================================================

// Math.pow(base, exponent)
// Purpose: Raises a number to a power.

// Math.sqrt(number)
// Purpose: Returns the square root.

// Math.cbrt(number)
// Purpose: Returns the cube root.

// ======================================================
// ABSOLUTE VALUE
// ======================================================

// Math.abs(number)
// Purpose: Returns the positive (absolute) value.

// ======================================================
// RANDOM NUMBERS
// ======================================================

// Math.random()
// Purpose: Returns a random number between 0 and 1.

// ======================================================
// TRIGONOMETRY
// ======================================================

// Math.sin(angle)
// Purpose: Returns the sine of an angle.

// Math.cos(angle)
// Purpose: Returns the cosine of an angle.

// Math.tan(angle)
// Purpose: Returns the tangent of an angle.

// Math.asin(number)
// Purpose: Returns the inverse sine.

// Math.acos(number)
// Purpose: Returns the inverse cosine.

// Math.atan(number)
// Purpose: Returns the inverse tangent.

// Math.atan2(y, x)
// Purpose: Returns the angle from x-axis to point (x,y).

// ======================================================
// LOGARITHMS
// ======================================================

// Math.log(number)
// Purpose: Returns the natural logarithm.

// Math.log10(number)
// Purpose: Returns the base-10 logarithm.

// Math.log2(number)
// Purpose: Returns the base-2 logarithm.

// ======================================================
// EXPONENTIAL
// ======================================================

// Math.exp(number)
// Purpose: Returns e raised to the given power.

// ======================================================
// SIGN
// ======================================================

// Math.sign(number)
// Purpose: Returns:
//  1  -> positive
// -1  -> negative
//  0  -> zero

// ======================================================
// HYPOTENUSE
// ======================================================

// Math.hypot(...numbers)
// Purpose: Returns the square root of the sum of squares.
// Useful for distance calculations.

// ======================================================
// END OF MATH METHODS
// ======================================================

// ======================================================
// TOP 15 MOST IMPORTANT MATH METHODS
// ======================================================

// 1. Math.PI
// Purpose: Value of π.

// 2. Math.round()
// Purpose: Round to nearest integer.

// 3. Math.floor()
// Purpose: Round down.

// 4. Math.ceil()
// Purpose: Round up.

// 5. Math.trunc()
// Purpose: Remove decimal part.

// 6. Math.random()
// Purpose: Generate a random number.

// 7. Math.max()
// Purpose: Largest number.

// 8. Math.min()
// Purpose: Smallest number.

// 9. Math.abs()
// Purpose: Absolute (positive) value.

// 10. Math.pow()
// Purpose: Raise a number to a power.

// 11. Math.sqrt()
// Purpose: Square root.

// 12. Math.cbrt()
// Purpose: Cube root.

// 13. Math.sign()
// Purpose: Check positive, negative, or zero.

// 14. Math.log()
// Purpose: Natural logarithm.

// 15. Math.exp()
// Purpose: e raised to a power.


console.log(Math.round(3.2));  // round neares
console.log(Math.floor(4.9))  // round down 
console.log(Math.ceil(4.1))   // round up 
console.log(Math.abs(-2));
console.log(Math.max(1))
console.log(Math.random())
console.log(Math.random());
console.log(Math.min(1,2,3))
console.log(Math.pow(2,4))
console.log(Math.PI)
console.log(Math.E);
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.SQRT1_2);
console.log(Math.LOG2E);
console.log(Math.abs(-3));
console.log(Math.trunc(2.333))

 

