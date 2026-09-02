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

// // async -await  is a modern js stntac for working with promises in a simpler and  more readabil way
// //  async/await is built on top of Promises

// // getStudent()
// //   .then((student) => {
// //     console.log(student);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// async function showStudent() {
//   try {
//     const student = await getStudent();
//     console.log(student);
//   } catch (error) {
//     console.log(error);
//   }
// }

// // async  is used for definnig a function     the basic syntax
// async function functionName() {}

// async function getData() {
//   // console.log("abdisa");
//   return "abdisa";
// } // the function is now called aync function
// // an async  function always  returns a promise.
// // this method return a promise
// const result = getData();
// console.log(result); // which return the promise not the result or data
// getData().then((name) => {
//   console.log(name);
// });

// // since the ayschronous function may produce the result later is give or return as promise
// // example

// async function getStudent() {
//   return {
//     name: "Abdisa",
//     age: 23,
//   };
// }
// //  async function always return a  promise
// const res = getStudent();
// console.log(res);

// // await

// // await is used to wait  for a promise resutlt
// // basix syntax

// // const  result = await  Promise;
// // const student = await  getStudent();
// // "wait for the promise returned  by getStudent()" to settel successfully , then put its result into student

// ///  await must normally be inside an async function

// async function showStudent() {
//   const student = await getStudent();

//   console.log(student);
// }

// // async
// //  ↓
// // allows the function to use await
// //  ↓
// // await
// //  ↓
// // waits for Promise result

// async function functionName() {
//   const result = await somePromise();
// }

// async function functionName() {
//   try {
//     const result = await somePromise();
//   } catch (error) {
//     console.log(error);
//   }
// }

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

// // example
// async function test() {
//   try {
//     let response = await fetch("https://randomuser.me/api"); // await for time taking and returning the promose
//     console.log(response);

//     let data = await response.json();
//     console.log(data);
//     const user = data.results[0];
//   } catch (error) {
//     alert("sorry, try again ");
//     console.log(error);
//   }
// }

// test();

// // try {

// // } catch (error) {

// // }

// // Promise() constructor function

// // async function myFunction ()  " this function works with asychrocouns  operation and will return a promise"

// // why does an async funtion  will return a Promise

// // this is due to the javascript treate

// async function greets() {
//   return "Hello";
// }
// // the above asyc opeation will appromixatelly treate as

// function greet() {
//   return Promise.resolve("Hello");
// }
// // we can consume the data it then () and catch
// // every async function returns a Promise "
// // "

// // await    is used to obtain the result of a promise
// // const result = await promise;

// async function showName() {
//   const name = await getName();

//   console.log(name);
// }

// console.log("A");

// showName();

// console.log("B");
// // await doent block  the entire javascript engine

// async function showStudent() {
//   try {
//     const student = await getStudent();

//     console.log(student);
//   } catch (error) {
//     console.log(error);
//   }
// }

// async / await is the cleaner syntax of consuming the promises

// real full stack example : Login API

// calling the backend ape
// POST/ api/login      suppose the backend provides
// suppose the fronted needs to senc

// {
//     "username": "Abdisa",
//     "password": "12345"
// }

// and receive

// {
//     "message": "Login successful",
//     "token": "abc123"
// // }
// async function login(username, password) {
//   try {
//     const response = await fetch("/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         username: username,
//         password: password,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Login failed");
//     }

//     const data = await response.json();

//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// User clicks Login
//        ↓
// login()
//        ↓
// fetch()
//        ↓
// Promise
//        ↓
// HTTP request
//        ↓
// Backend
//        ↓
// Database
//        ↓
// Backend response
//        ↓
// fetch Promise fulfilled
//        ↓
// response
//        ↓
// response.json()
//        ↓
// another Promise
//        ↓
// JSON parsed
//        ↓
// data
//        ↓
// update UI

// every asych function return a Promise

// create custom promisese

// JavaScript asks for data
//         ↓
//      Promise
//         ↓
//    "Wait for result"
//         ↓
//  ┌───────────────┐
//  │               │
// Success        Failure
//  │               │
// resolve()      reject()
//  │               │
// value           error

// Why do we need Promises?

// Consider an operation that takes time:

// requesting data from a backend
// reading a file
// querying a database
// waiting for a timer
// uploading a file
// downloading data
// authenticating a user

// how to create  a Promise
// js provides the built in constructor called.

// Promise
// new Promise()

// the basic sytack
//  creating the new object using the constuctor
// const person = new Person();
// const promise = new Promise();

// // (resolve , reject) => {}  the function passed to the Promise constructor is called the exector function
// //
// console.log("before");
// const myPromise = new Promise((resolve, reject) => {
//   console.log("executor function is running ");
// });
// // the passed function as argumenent or the executor function runs immediatel when the promise is created
// //
// console.log("after");

// //   when js create the promise object , it atuomaticaly provides two function to the exector.

// // resolve();
// // mean the asychronous opeation succeeded.
// // reject()
// // JavaScript gives your executor function two functions that you can use to tell the Promise whether the operation succeeded or failed
// const myPromises = new Promise((resolve, reject) => {
//   resolve("Operation successful"); // fulfillement value
// });

// // reject() mean  operation failed

// // const myPromise = new Promise((resolve, reject) => {
// //   reject("Something went wrong");
// // });

// // reject(new Error("Something went wrong"));

// // because the Error object contains useful debugging information

// const myProm = new Promise((resolve, reject) => {
//   resolve("Hello");
// });

// // how to consume the result from the promise using the  .then()
// myPromise.then((result) => {
//   console.log(result);
// });

// // const myPromise = new Promise((resolve, reject) => {
// //   reject(new Error("Something went wrong"));
// // });

// myPromise.catch((error) => {
//   console.log(error.message);
// });

// // myPromise
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   });

// //                   ┌── success ──→ .then()
// // // Promise ──────────┤
// // //                   └── failure ──→ .catch()

// function getStudent() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Student data");
//     }, 2000);
//   });
// }

// getStudent()
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // A custom Promise with success and failure

// function login(username, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (username === "admin" && password === "1234") {
//         resolve("Login successful");
//       } else {
//         reject(new Error("Invalid username or password"));
//       }
//     }, 2000);
//   });
// }

// login("admin", "1234")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// // custom promise function
// //     function getStudent() {
// //     return new Promise(...);
// // }

// // so a pomise can eventually provide almost any js values  boolean   object, numbers  array , srting

// function getStudent() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const student = {
//         id: 1,
//         name: "Abdisa",
//         department: "Computer Engineering",
//       };

//       resolve(student);
//     }, 2000);
//   });
// }

// getStudent().then((student) => {
//   console.log(student.name);
// });

// function getStudents() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const students = ["Abdisa", "Ahmed", "Ali"];

//       resolve(students);
//     }, 2000);
//   });
// }

// getStudents().then((students) => {
//   console.log(students);
// });

// console.log("A");

// const promise = new Promise((resolve, reject) => {
//   console.log("B");

//   setTimeout(() => {
//     console.log("C");
//     resolve();
//   }, 1000);
// });

// console.log("D");

// promise.then(() => {
//   console.log("E");
// });

// const promises = Promise.resolve("Hello");

// promises.then((value) => {
//   console.log(value);
// });

// console.log("World");

// // custom asychronous opeation
// function getStudent() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Student data");
//     }, 2000);
//   });
// }

// const promisewert = new Promise((resolve, reject) => {
//   resolve("Success");

//   reject(new Error("Failure"));
// });

// // the promise can only settle once in the above examples once the promise fulilled ther ohter code ignored
// const promise123 = new Promise((resolve, reject) => {
//   reject(new Error("Failure"));

//   resolve("Success");
// });

// login("admin", "1234")
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   })
//   .finally(() => {
//     console.log("Login process finished");
//   });

// // .finally() it run whether the promise succeeds or fials

// //   finally() is useful for things such as:

// // hiding loading indicators
// // enabling buttons again
// // cleaning up resources
// // // closing a dialog

// // promises chaining  the promise can be chained
// getStudent()
//   .then((student) => {
//     console.log(student);
//     return getCourses(student.id);
//   })
//   .then((courses) => {
//     console.log(courses);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// fetch("/api/students")
//   .then((response) => {
//     return response.json();
//   })
//   .then((students) => {
//     console.log(students);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;

//       if (success) {
//         resolve({
//           id: 1,
//           name: "Abdisa",
//         });
//       } else {
//         reject(new Error("Could not get user"));
//       }
//     }, 2000);
//   });
// }

// // getUser()
// //   .then((user) => {
// //     console.log(user.name);
// //   })
// //   .catch((error) => {
// //     console.log(error.message);
// //   })
// //   .finally(() => {
// //     console.log("Request finished");
// //   });

// // // creating a promise
// // const promis = new Promise((resolve, reject) => {
// //   // operation

// //   if (success) {
// //     resolve(result);
// //   } else {
// //     reject(error);
// //   }
// // });

// // // consume a promise

// // promise
// //   .then((result) => {
// //     // success
// //   })
// //   .catch((error) => {
// //     // failure
// //   })
// //   .finally(() => {
// //     // always runs
// //   });

// //   // creating custom promise based function
// //   function myFunction() {
// //     return new Promise((resolve, reject) => {
// //       // asynchronous operation

// //       if (success) {
// //         resolve(result);
// //       } else {
// //         reject(error);
// //       }
// //     });
// //   }

// //   myFunction()
// //     .then((result) => {
// //       console.log(result);
// //     })
// //     .catch((error) => {
// //       console.log(error);
// //     });

// //     // promise () constructor function

// let test = new Promise((resolve, reject) => {
//   resolve("the promise is resolved");
//   reject("somethings went wrong "); // is ignored after resovle and  viceversa
// });

// console.log(test);

// // alarm api system

// function alarm(person, delay) {
//   return new Promise((resolve, reject) => {
//     if (delay < 0) {
//       reject("Alarm delay cannot be negative ");
//     }
//     setTimeout(() => {
//       resolve(` Wake up ,  ${person} `);
//     }, delay);
//   });
// }

// // console.log(alarm("bob" , 2000));

// alarm("bob", 2000)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // async function getUp() {
// //   try {
// //     let data = await alarm("bob", 2000);
// //     console.log(data);
// //   } catch (error) {
// //     console.log(error);
// //     // alert("error happnes")
// //   }
// // }
// // getUp();.

// async function displayData() {
//   try {
//     let response = await fetch("https:randomuser.me/api");
//     let data = await response.json();
//     const user = data.results[0];

//     const userContanier = document.getElementById("user-contanier");
//     userContanier.innerHTML = `
//        <img src="${user.picture.large}" alt="user picture">
//      <h3>Name: ${user.name.first}  ${user.name.last}</h3>
//      <h3>Email : $ {user.email}</h3>
//      <h3>Location :  ${user.location.city}</h3>

//      `;
//   } catch (error) {}
// }
// displayData();

// const myPromise = new Promise((resolve, reject) => {
//   const success = Math.random() > 0.5;
//   if (success) {
//     resolve(" ➡️Promise resolved");
//   } else {
//     reject("❌ promise rejected");
//   }
// });
// // consumeing using then , catch , finally

// myPromise
//   .then((result) => {
//     console.log("then", result);
//   })
//   .catch((error) => {
//     console.log("catch", error);
//   })
//   .finally(() => {
//     console.log("Finally: this run on what of what.");
//   });

// function checkWeather() {
//   return new Promise((resolve, reject) => {
//     const isSunny = Math.random() > 0.5;
//     setTimeout(() => {
//       if (isSunny) {
//         resolve("Its sunny today ☀️");
//       } else {
//         reject("its ranny today 🌧️");
//       }
//     }, 1500);
//   });
// }
// checkWeather().then((weather) => {
//   console.log(weather)
// }). catch((badWeather) => {
//   console.log(badWeather)
// })

// // chaining from the exercise question
// // Chaining
// Promise.resolve("Start")
//   .then((val) => {
//     console.log(val);
//     return "Next";
//   })
//   .then((val) => {
//     throw new Error("Something went wrong");
//   })
//   .catch((err) => {
//     console.log("Caught error:", err.message);
//     return "Recovered";
//   })
//   .then((val) => {
//     console.log("Final value:", val);
//   });

//   // when a .then()  callback return a normal values,  that values become fulfilled value of  the new Promise returned by  that .then()

//   // chaining jumping effectively
//   // when .catch method return a noarmal values  the promise chain becomes fulfilled again

// //   Error
// //   ↓
// // .catch()
// //   ↓
// // handle error
// //   ↓
// // return "Recovered"
// //   ↓
// // Promise fulfilled again

// // return passed a vale forward to next .then method
// // throw changes the chain to rejected
// // .then(() => {
// //     throw new Error("Error");
// // })

// // .then()
// //   ↓
// // throw
// //   ↓
// // ❌ rejected Promise
// //   ↓
// // find .catch()

// // catch can recover the chain

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise

//   .then(function () {
//     console.log("Success 1");
//   })

//   .then(function () {
//     console.log("Success 2");
//   })

//   .then(function () {
//     console.log("Success 3");
//   })

//   .catch(function () {
//     console.log("Error 1");
//   })

//   .then(function () {
//     console.log("Success 4");
//   });
//   // Error 1
//   // Success 4

//   // Because the .catch() callback finishes normally and does not throw another error, the Promise becomes fulfilled/recovered

//   function job(state) {
//     return new Promise(function (resolve, reject) {
//       if (state) {
//         resolve("success");
//       } else {
//         reject("error");
//       }
//     });
//   }

//   let promises= job(true);

//   promises

//     .then(function (data) {
//       console.log(data);

//       return job(false);
//     })

//     .catch(function (error) {
//       console.log(error);

//       return "Error caught"; //"I successfully handled the error. Continue the Promise chain."
//     })

//     .then(function (data) {
//       console.log(data);

//       return job(true);
//     })

//     .catch(function (error) {
//       console.log(error);
//     });
// 1.success
//  2.error
//  3. Error caught;
//No — the Promise does not go back and repeat the previous steps. It continues forward from the .catch() one way road it does not loop backward

// .catch(function(error) {
//     console.log(error);
//     throw new Error("Another error");
// })   // .catch() does not automatically mean the Promise is fulfilled .
// it depens on what happes inside the .catch()

// return "Recovered";  //  chain becomes fulfilled and continues
//throw new Error("Failed again");   the chain becomes rejected and continues to the next .catch();

//It never goes backward. It always moves forward through the Promise chain

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promisess = job(true);

promisess

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat";
    }

    return job(true);   // this line of code is never executed  the throw stop  immedialtel stops the function  then we directely jump to the .catch()
  })

  .then(function (data) {   // this the previs is rejected is then also skipped
    console.log(data);  // since its skipped this line of code is not executed
  })

  .catch(function (error) {
    console.log(error);

    return job(false);
  })

  .then(function (data) {
    console.log(data);

    return job(true);
  })

  .catch(function (error) {
    console.log(error);

    return "Error caught";
  })

  .then(function (data) {
    console.log(data);

    return new Error("test");
  })

  .then(function (data) {
    console.log("Success:", data.message);
  })

  .catch(function (data) {
    console.log("Error:", data.message);
  });

// 1. success
// 2.  defeat
// 3 error
// 4  return caught
// 5 sucees
//  6  error   : test

//   es. This one is more difficult because it demonstrates several Promise rules at the same time:

// a .then() can return another Promise
// a .then() can throw an error
// .catch() can recover the chain
// .catch() can also return a rejected Promise
// returning an Error object is not the same as throwing an error
// the chain can move from success → error → success → error


// what does throw 'defeat ' do 

//  stop this .then() and make the promise chain rejected

