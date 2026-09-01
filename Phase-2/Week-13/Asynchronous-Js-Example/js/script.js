// // console.log("hi");
// // const studentName = "abebe";
// // const greeting = `My name is : ${studentName}`;
// // console.log(greeting);

// // //  call stack
// // console.log("task 1");
// // console.log("task 2");
// // console.log("task 3");

// // // call stack example 2

// const mult = (a, b) => a * b;
// const square = (n) => mult(n, n);
// const printSquare = (n) => console.log(square(n));
// printSquare(4);
// // console.log(Date.now());

// console.log("start");
// function delay(seconds) {
//   const start = Date.now();
//   let x = true;
//   while (x) {
//     const current = Date.now();
//     if (current - start >= seconds * 1000) {
//       console.log("hi");
//       x = false;
//     }
//   }
// }
// delay(5);

// console.log("doing somethings completely unrelated to the timer  of above ");
// // is going to be affefcted by the timer ; it have delay;  the is the big problem of synchronous  js code ;
// // // we fix this  using asychronous Js   we need another place  for timeset out  we the browser api  to executte the code to execute not to affect other unrelated code.
// // // synchronous tasks are one that execute sequentially one after the other , while they're  begin executed nothein else i begin dome

// // // Example   if the task two is a long running task it will block the execution of the task three until the task two is completed  and this is not good for user experience  so we need an asynchronous way to handle this  and we can do this using setTimeout function  which is a browser api that allows us to execute a function after a certain amount of time has passed without blocking the execution of other code.
// console.log("task 1");
// setTimeout(() => console.log("task 2"), 2000);
// console.log("task 3");

// console.log("hi");
// function greet(sec) {
//   setTimeout(() => {
//     console.log("he from setTimeout");
//   }, sec);
// }
// greet(3000);
// console.log(" this line of code is not blocked by the function greet because it is not blocked by the setTimeout function it is executed immediately after the greet function is called and the setTimeout function is executed after the specified time has passed.");
// // console.log("selam now ");  this is not blocked  by the funcion greet because it is it not blocked by the setTimeout function  it is executed immediately after the greet function is called and the setTimeout function is executed after the specified time has passed.

// // // we got one issues   on from the executing the asychronous function we can't get the response of the function because it is executed after the specified time has passed and we can't access the response of the function in synchronous code because it is executed immediately after the function is called and the setTimeout function is executed after the specified time has passed.
// // //  the issues with trying to access the responsse of an asychronous  function in sychrnoouse code
// // // to display the date we get the undefined  to fetch the data from other points  it makes undefined because the function is executed after the specified time has passed and we can't access the response of the function in synchronous code because it is executed immediately after the function is called and the setTimeout function is executed after the specified time has passed.
//   // issues with trying to access the response of an asynchronous function in synchronous code

// function fetchUserData() {
//   setTimeout(() => {
//     const data = { name: "john doe", age: 30 };
//     return data
//   } , 1000);  // eventhough the seconds is zero
// }
// const userData = fetchUserData();
// console.log(userData); // logs undefined // we expect to get the data but we get undefined because the function is executed after the specified time has passed and we can't access the response of the function in synchronous code because it is executed immediately after the function is called and the setTimeout function is executed after the specified time has passed.
// to solve the above issues we use thre different ways to handle asychronous code in javascript
//
// 1. callback function
// 2. promise
// 3. async await

// call back function examples

// is the function passed ot another function as an argument to be executed later   and so that ther other functin can call it later or at an appropriate time and it is a way to handle asychronous code in javascript  and it is a way to handle the response of an asychronous function in synchronous code because it is executed immediately after the function is called and the setTimeout function is executed after the specified time has passed.

function processUser(name, callback) {
  callback(name);
}

function showUser(name) {
  console.log(name);
}

processUser("Abdisa", showUser);

// here the function showUser is passed as an argument to the function processUser and it is called inside the function processUser  and its called the callback function .

// the differece between argument and parameter is that the argument is the value that is passed to the function when it is called and the parameter is the variable that is used to receive the value that is passed to the function when it is called.

// showUser()  // the callback function
//      ↓
// passed into
//      ↓
// processUser()
//      ↓
// processUser calls it after executes its code or task .

// A call back is not automatically asychrounous or not all the call back function is asychrouncous .

function process(callback) {
  console.log("A");

  callback();

  console.log("B");
}

process(function () {
  console.log("Callback");
});  // this callback function is not asychroucous because  everthings happens sychronously .
// A
// Callback
// B
//There is no timer, network request, event waiting, or other asynchronous mechanism.

// when does  a call back function become asychronous 
//  a callback becomees asychronous when the function receiving it arranges for the callback  to execute later , agter the current sychrous execution has finsihde or after soem asncdronu opeation competes 

function processs(callback) {
  setTimeout(function () {
    callback();
  }, 2000);
}
  processs(function () {
    console.log("Finished");
});  // here it call back does not execute immediately instead
// process()
//    ↓
// setTimeout()
//    ↓
// Browser timer
//    ↓
// 2 seconds
//    ↓
// callback becomes ready
//    ↓
// callback executes

function calculate(callback) {
  console.log("Start");

  callback();  //   run immeditately

  console.log("End");
}

calculate(function () {
  console.log("Callback");
}); // this is the sychronous callback function .  start -> callbac -> end 

function calculate(callback) {
  console.log("Start");

  setTimeout(function () {
    callback();
  }, 2000);

  console.log("End");
}

calculate(function () {
  console.log("Callback");
});
// this is the asychronous callback function .  start -> end -> callbac  after 2 seconds(wait)

// what makes it asychronous 
// timer setTimeout(callback, 2000);

// user event   button.addEventListener("click", callback);
//fetch("/api/students"); 
  // other broswser api
// Timers
// Network requests
// DOM events
// Geolocation
// File-related operations
// WebSocket messages

// 8. Why were callbacks useful?

// Before Promises became the standard abstraction for Promise-based asynchronous programming, callbacks were a fundamental way to express:

// "Do this after this operation finishes."

// real life example 
// login page 

// loading the data (students)
// Get/api/students   frontend requeest

// Callback
//    ↓
// How is it called?
//    ↓
// Immediately?
//    │
//    └── YES → synchronous callback
       
// // Later? // after taking some time (await) by those mechanisem later must caused Timer
// Event
// Network operation
// Browser API
// I/O
//    │
//    └── YES → asynchronous callback

// the major limitation of callbacks is that 
// callback hell   or pyramid of doom .
// difficult to read

// difficult to debug
// error handling is difficult
// difficult to maintain

// // 
// login(function (user) {
//   getProfile(user, function (profile) {
//     getOrders(user, function (orders) {
//       getPayment(orders, function (payment) {
//         console.log(payment);
//       });
//     });
//   });
// })


// window.addEventListener("click", function () {
//   console.log("window  click");
// });

// callback Hell
// promise  object it have its own constructor

// try {

// } catch (error) {

// }

// synchronous JS

// console.log("A");

// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");
