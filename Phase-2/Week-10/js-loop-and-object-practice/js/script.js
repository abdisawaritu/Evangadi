/* Decision loop  and Object Oriented Programming */
// for loop  is the programming structure that repeatedly exectues a block of code as long as the conidtion is true
/*  a loop is a way to execute the same code multiple times without writing it repeatedly*/
// for ( initialization ;  condition ; update(increment )){code to repeat}

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

// built in js objects (the most commmon built in js objects )
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
