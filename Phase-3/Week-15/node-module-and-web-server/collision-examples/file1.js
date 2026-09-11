// // Name space collision
// // developer A

// var x = () => {
//   console.log("Developer A");
// };
// x();

// varx = () => {
//   console.log("Developer B");
// };
// x();

// // the solution for the namespace collision

// let first = {
//   X() {
//     console.log("Developer B");
//   },
// };

// let second = {
//   X() {
//     console.log("developer A");
//   },
// };
// // first.x();
// second.X();

// // wrapping the code inside the braces
// eat = () => {
//   console.log(" hana ate ");
// };

// Immediately invoded  function  IIFE  immediatel invoked function  expression  solution

// wrapping using the function  and bracker and the function is immediately called

// (function () {
//   console.log("developer A");
//   var x = 5;
//   console.log(x);
//   function addone() {
//     console.log(x + 1);
//     addone();
//   }
// })();

// (function () {
//   console.log("Developer B");
// })();

// modularity  dividiging into different modules
// commonJs and  ES6  modulariry Method .
// Modulariy standard .
// wrapping function function scope not global function scope 
// CommonJs and ES6  modulariy standard 
// code reusablity 
// to avoid the global namespace collision . 
// basic concepts node modules 

//  Node Module is a single  or multiple js file with  specific functionaly organized in a way that can be resued thorughout the node application.
// in node , we dont have window object rather  global object 

// module object 
// any js file is considered as  module when we run that file  on the node run time enviroment 

// creating the local / custom  module in node js 
// using the built   core modules 
// the thirdy parts modules  the develper deveopled 

// common js  standard the module node uses 

// commonJs  Standard
// file based system 
//   one file is one module 
// one package includes at least one file 
// commmon js wraps a each module in a function called require() and icludes an object called module.exports  which exports the code functionality  to be reqired by ohter modules 








