// Question On Node Modules
// 1.

console.log("My First Module ");
const myMultipler = (number) => {
  return number * 2;
};

// console.log(myMultipler(4))
const myMulti = myMultipler(4);
// console.log(myMulti);

module.exports = myMultipler;
// module.exports = { myMultipler };

// module.exports = { add, substract, multiple}  //  Exposing the  multiple functions
// when we import the multiple function
//  const add = {add , substract, multiply} = require ("./calculator ") here we use the destructuring of the object
// const {add}  = require("./calcultor")
// one function  module.exports = add;
// multiple function  module.exports = {a , b,c }  is better to use  destructuring even if we have one function for the exposing it better to use
// console.log(module);
