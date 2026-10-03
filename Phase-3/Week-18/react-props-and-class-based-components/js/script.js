// let student = {
//   name: "John Doe",
//   age: 20,
//   major: "Computer Science",
// };
// console.log(student);

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// // by convention, we capitalize the first letter of a constructor function's name because  we use small letters for regular functions and capital letters for constructor functions.
// // this keyword refers to the current instance of the object being created. When we create a new instance of the Person object using the new keyword, the this keyword refers to that specific instance.
// Person.prototype.getName = function () {
//   return this.name;
// }
// console.log(person1.getName()); // Output: Alice
// console.log(person2.getName()); // Output: Bob
// Person.prototype.age = function () {
//   return this.age;
// }

// let person1 = new Person("Alice", 25);
// let person2 = new Person("Bob", 30);
// console.log(person1);
// console.log(person2);

// Class based Object using class keyword using ES6

class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }
}

const person1 = new Person("Alice", 25, "Female");
const person2 = new Person("Bob", 30, "Male");
console.log(person1);

// this method of creating objects using the es6 class is more efficient when we have to create multiple object withe sama poperties and methods. In such cases, we can use class based object to create objects that have the same properties in common or the same attributes in common.

// Js classess 
//   are the template for creating object  

// constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A constructor can use the super keyword to call the constructor of the super class.  it name is called constructor   and it called at automatically when we create  a new objects.


//  destruction concept in js  

// example

let a = [1, 2, 3, 4, 5];
let b = a[0];
let c = a[1];
let d = a[2];
console.log(b, c, d);
// destructuring assignment is a special syntax that allows us to "unpack" arrays or objects into a bunch of variables, as sometimes that is more convenient. we use the destructuring assignment syntax to unpack values from arrays, or properties from objects, into distinct variables. there is array and objects destructuring. we can use destructuring assignment to assign values from arrays or properties from objects to variables in a more concise way.

let [x, y, z] = a;
console.log(x, y, z);


// exmaple for the object destructuring 

let student = {
  name: "John Doe",
  age: 20,
  major: "Computer Science",
};

let { name, age, major } = student;
console.log(name, age, major);




// class based component in react js

// there are a couple of major differences between class based components and functional components in react js.    


// how to convert the functional component to class based component in react js

// those differences  will move clear once we get to learn about state and lifecycle methods in react js.  we will learn about state and lifecycle methods in the next section of this course.

// steps we follow to convert the functional component to class based component in react js  the steps are as follows:

// step1 : replace  the function keyword with class
// step2 : import the  react componenets  and extends from that class 
// ste3 : render method  wrap within the   render methods  this the method which is found on the components class 


//  base class

// component - base or parent class

import { Component } from "react";
// class App   extends React.Component  {
//    render(
//      return  (
//         <>

        
//         </>
//     )
//    )
// }













