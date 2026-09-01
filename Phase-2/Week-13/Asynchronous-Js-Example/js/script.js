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

// function processUser(name, callback) {
//   callback(name);
// }

// function showUser(name) {
//   console.log(name);
// }

// processUser("Abdisa", showUser);

// // here the function showUser is passed as an argument to the function processUser and it is called inside the function processUser  and its called the callback function .

// // the differece between argument and parameter is that the argument is the value that is passed to the function when it is called and the parameter is the variable that is used to receive the value that is passed to the function when it is called.

// // showUser()  // the callback function
// //      ↓
// // passed into
// //      ↓
// // processUser()
// //      ↓
// // processUser calls it after executes its code or task .

// // A call back is not automatically asychrounous or not all the call back function is asychrouncous .

// function process(callback) {
//   console.log("A");

//   callback();

//   console.log("B");
// }

// process(function () {
//   console.log("Callback");
// }); // this callback function is not asychroucous because  everthings happens sychronously .
// // A
// // Callback
// // B
// //There is no timer, network request, event waiting, or other asynchronous mechanism.

// // when does  a call back function become asychronous
// //  a callback becomees asychronous when the function receiving it arranges for the callback  to execute later , agter the current sychrous execution has finsihde or after soem asncdronu opeation competes

// function processs(callback) {
//   setTimeout(function () {
//     callback();
//   }, 2000);
// }
// processs(function () {
//   console.log("Finished");
// }); // here it call back does not execute immediately instead
// // process()
// //    ↓
// // setTimeout()
// //    ↓
// // Browser timer
// //    ↓
// // 2 seconds
// //    ↓
// // callback becomes ready
// //    ↓
// // callback executes

// function calculate(callback) {
//   console.log("Start");

//   callback(); //   run immeditately

//   console.log("End");
// }

// calculate(function () {
//   console.log("Callback");
// }); // this is the sychronous callback function .  start -> callbac -> end

// function calculate(callback) {
//   console.log("Start");

//   setTimeout(function () {
//     callback();
//   }, 2000);

//   console.log("End");
// }

// calculate(function () {
//   console.log("Callback");
// });
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

// callbacks  function

// function step1(step2) {
//   console.log(" Step 1 done");
//   step2();
// }
// step1(function () {
//   console.log(" Step 2 done");
// }); // this callback is not asychronous since it immediately

// // to solve the above issues
// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: "john doe", age: 30 };
//     callback(data); // simulate a 2 - seconds dealy
//   });
// }

// fetchData(function (data) {
//   console.log(data);
// });

// the big analogy to understand the asychronous callback.

// function orderPizza(callback) {
//   console.log("order pizza");
//   setTimeout(() => {
//     const pizza = "🍕";
//     console.log(`Your ${pizza} is  ready`);
//     callback(pizza);
//   }, 2000);
// }

// function pizzaReady(pizza) {
//   console.log(`Eat your ${pizza}`);
// }

// orderPizza(pizzaReady);
// console.log("call a friend");
// console.log("meet your friend"); // sychronous code

// // it have an isseues of the callback hell.

// // example of callback hell

// function firstTask(callback) {
//   setTimeout(() => {
//     console.log("First task done");
//     callback();
//   }, 1000);
// }

// function secondTask(callback) {
//   setTimeout(() => {
//     console.log("Second task done");
//     callback();
//   }, 1000);
// }

// function thirdTask(callback) {
//   setTimeout(() => {
//     console.log("Third task done");
//     callback();
//   }, 1000);
// }

// firstTask(() => {
//   secondTask(() => {
//     thirdTask(() => {
//       console.log("All tasks completed");
//     });
//   });
// });

// () => {
//   secondTask(() => {
// //     thirdTask(() => {
// //       console.log("All tasks completed");
// //     });
// //   });
// // };  // which is passed to to firstTask.

// // Promise
// // Promise object
// // Promise constructor
// // custom constructor

// // fetch("https://jsonplaceholder.typicode.com/todos/1")
// // return promises  to get the data from some server

// // fetching data from a server
// // reading files or
// // dealing with time  -consuming time operation
// // are fundamentally tool for handling asychronous opeation in a more strucuted and manae way in the above scenario we can use promise to handle the asychronous operation in a more structured and
// // 3 states of promise

// // pending
// // fulfilled
// // rejected
// // example of promise
// // using the fetch Web API  EXAMPLE
// //  - CONSUME THE RESULT USING .then()
// //   -handle the error using .catch()
// let response = fetch("https://randomuser.me/api");
// console.log(response);

// // fulfilled state

// fetch("https://randomuser.me/api")
//   .then((response) => {

//     // let  text = response.json();
//     // console.log(test);
//     // console.log("fulfilled state");
//     console.log(response);  // additional information about the response object.
//     console.log(response.json());
//     return response.json();

//     // parse the response as JSON
//   })
//   .then((data) => {
//     console.log("fulfilled state");
//     console.log(data.results[0]);
//     // handle the data
//   })  // chain the other

//   .catch((error) => {
//     console.log("rejected state");
//     console.log("somethings went Wrong:", error);  // informing the error to the user by wriring the custom and descriptive error message handling  for the
//     // used for the rejecting response  from the response
//     // catch handles all the error which are above happnded ins the above chainin of fech and then

//   });  // handles all the errors address error , all the error , it reports the error to the catch method . one catch method handlers every level found in the promise chain.

// fetch ("https://randomuser.me/api") return  a promise that resovlies ot the response of the request

// console.log(fetch("https://randomuser.me/api"));  // it returns a promise that resolves to the response of the request.  the promise is in pending state until the request is completed.  once the request is completed the promise is either fulfilled or rejected.  if the request is successful the promise is fulfilled and if the request fails the promise is rejected.  we can handle the fulfilled state using .then() method and we can handle the rejected state using .catch() method.
// to get real data we follow some process
// error handling  is important  points  me must show the error to the user and we must handler the error  description error to user  by making
// how we can handle the response   the user data  then catch chaninig to get real data to show or render the resonsded data .
// chaining one on others

// async and await

// async -await  is a modern js stntac for working with promises in a simpler and  more readabil way
//  async/await is built on top of Promises

// getStudent()
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function showStudent() {
  try {
    const student = await getStudent();
    console.log(student);
  } catch (error) {
    console.log(error);
  }
}

// async  is used for definnig a function     the basic syntax
async function functionName() {}

async function getData() {
  // console.log("abdisa");
  return "abdisa";
} // the function is now called aync function
// an async  function always  returns a promise.
// this method return a promise
const result = getData();
console.log(result); // which return the promise not the result or data
getData().then((name) => {
  console.log(name);
});

// since the ayschronous function may produce the result later is give or return as promise
// example

async function getStudent() {
  return {
    name: "Abdisa",
    age: 23,
  };
}
//  async function always return a  promise
const res = getStudent();
console.log(res);

// await

// await is used to wait  for a promise resutlt
// basix syntax

// const  result = await  Promise;
// const student = await  getStudent();
// "wait for the promise returned  by getStudent()" to settel successfully , then put its result into student

///  await must normally be inside an async function

async function showStudent() {
  const student = await getStudent();

  console.log(student);
}

// async
//  ↓
// allows the function to use await
//  ↓
// await
//  ↓
// waits for Promise result

async function functionName() {
  const result = await somePromise();
}

async function functionName() {
  try {
    const result = await somePromise();
  } catch (error) {
    console.log(error);
  }
}

// full stack example application
//  Login
// create the login function
// make the api request
// check the response
//  If (!response .ok){
// throw new Error("Login failed")
//}

// to convert the response to JSON
// const data =  await Response.json();

// response.json()  return a Promise

// response.json()
//       ↓
// Promise
//       ↓
// JSON processing
//       ↓
// JavaScript object

//       ASYNCHRONOUS OPERATION
//                ↓
//             Promise
//                ↓
//     ┌──────────┴──────────┐
//     ↓                     ↓
//  Success                Failure
//     ↓                     ↓
//  resolve                 reject
//     ↓                     ↓
// .then()                .catch()
//     │
//     │
//     └────── OR ──────────┐
//                           ↓
//                     async function
//                           ↓
//                         await
//                           ↓
//                     result obtained
//                           ↓
//                       try/catch

// async	Makes a function return a Promise
// await	Waits for a Promise inside an async function
// resolve()	Successfully completes a Promise
// reject()	Fails a Promise
// .then()	Handles a successful Promise result
// .catch()	Handles a rejected Promise
// try/catch	Common error-handling mechanism with async/await
// return in async function	Produces a fulfilled Promise
// await promise	Gives you the fulfilled value
// fetch()	Returns a Promise for an HTTP request
// response.json()	Returns a Promise for parsed JSON

// User action
//     ↓
// Frontend JavaScript
//     ↓
// fetch()
//     ↓
// Promise
//     ↓
// Backend API
//     ↓
// Database
//     ↓
// Response
//     ↓
// await
//     ↓
// JSON data
//     ↓
// Update DOM/UI

// async/await does not replace Promises; it gives you a cleaner way to write code that works with Promises.

// async function logData() {
//   try {
//     let response = await fetch("");
//     console.log(response);
//     let data = await response.json();
//     const user = data.results[0];
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// }
// logData();

// promises and asychronouse operation is done using the above methods  is have normal function writing method  sytanx 
// the promise is handled using the async await rather than using  then catch as promise  the async  keyword is added to  fornted of te fucntion 

