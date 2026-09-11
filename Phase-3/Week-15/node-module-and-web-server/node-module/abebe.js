function sum(a, b) {
  let c;
  c = a + b;
  console.log(c);
}

function x() {
  console.log("this is the function from abebe.js");
}
let number = 5;

// module.exports.abebe = number;
// // exporting the function and variable here to use it inside other modules  for reusability. inside other modules
// module.exports.sum = sum;

// console.log(module);
// those are availabe for the others to use thogh importing

// for usage inside other modules to use this using require() function it can use inside the exports object.

// ES6   standard that react uses importing and exporting  sytanx is different from the common js

export default number;
export { sum };
export { x };
