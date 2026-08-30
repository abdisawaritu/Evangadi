// console.log("hi");
// const studentName = "abebe";
// const greeting = `My name is : ${studentName}`;
// console.log(greeting);

// //  call stack
// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// // call stack example

// const mult = (a, b) => a * b;
// const square = (n) => mult(n, n);
// const printSquare = (n) => console.log(square(n));
// printSquare(4);
// console.log(Date.now());

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

// console.log("doing somethings completely unrelated to the timer  of above "); // is going to be affefcted by the timer ; it have delay;  the is the big problem of synchronous  js code ;
// // we fix this  using asychronous Js   we need another place  for timeset out to execute not to affect other unrelated code.
// // synchronous tasks are one that execute sequentially one after the other , while they're  begin executed nothein else i begin dome

// // Example
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
// console.log("selam now ");

// // we got one issues
// //  the issues with trying to access the responsse of an asychronous  function in sychround code
// // to display the date we get the undefined

// function fetchUserData() {
//   setTimeout(() => {
//     const data = { name: "john doe", age: 30 };
//     return data
//   } , 1000);
// }
// const userData = fetchUserData();
// console.log(userData);

window.addEventListener("click", function () {
  console.log("window  click");
});

// callback Hell
// promise  object it have its own constructor

// try {

// } catch (error) {

// }

// synchronous JS

console.log("A");

setTimeout(() => {
  console.log("B");
}, 2000);

console.log("C");
