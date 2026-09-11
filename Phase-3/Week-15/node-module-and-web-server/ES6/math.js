// let add = (x, y ) =>  x+y;

// export default add;

let add = (x, y) => x + y;
let sub = (x, y) => x - y;

export { add, sub };
export default add; // only one function to export  we use it on the react . only one function is used as default for exporting using the  ES6
 // expose these function and variable to other files or modules 
 // module.exports = {add, substract , age } // used for exposing the multiple  function and varaible to other file or modules 