// console.log(" this js file is connected");

function adders(a, b) {
  if (typeof a !== "number" || typeof b !== "Number") {
    return " I can only add number. please provide the number ";
  }
  let c = a + b;
  return c;
}
let sum = adders(2, "abebe");
console.log(sum);
// from stack overflow
// google searching skills  using how do I

// the number one skills for developer ask google and AI tools  google searching skills  asking question

// pseducode

// understand the problem statement
// write the pseudocode

//BEGIN
//DEFINE   function  add ( num1 , num2 )
// if number one  or others is not number  then
// return  " error "
// end if
// ser  the sum  result  =   number1 + number2
// return result

const adder = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return " Error: please provide the valid number ";
  }
  // if (isNaN(num1 )  || isNaN(num2))
  else {
    let result = num1 + num2; //  Number(a )  + number( b )  parseFloat( a ) + parseFloat ( b )
    return result;
  }
};
// test case:
console.log(adder(2, 3));
console.log(adder(2.2, 2));

// console.log(isNaN("13"))
// console.log(isNaN("hello"))

// function and conditional statement
// how to declare the function in js
// function is declared by three methods
// 1.  normal function declaration using the function keywords
// 2.  using the function expression by placeing on the variable
// 3.  using the arrow funcation which is the modern method of the delcaring the function
//

function abebe() {
  // declaration of the fuction  name of the fuction what the funcation acually do or the descriptive name of the fuction name using the camel case
  // block of code  or a set of instruction
  console.log("abebe ");
  console.log(" hello abe ");
  let num1 = 10;
  let num2 = 30;
  console.log(num1 + num2);
  console.log(
    "the function is declared using the normal js function declaration ",
  );
}
abebe(); // calling the funtion to execute iis instruction  invoking the fuction
abebe();

// using the fuction expression anonymous function declaraltion on variable
const functions = function () {
  // a set of the code goes here or the a set of instruction goes here what the fuction is going to do is goes here
  console.log(
    " the fuction is delcared using the using the function expression ",
  );
};
functions();

// function with arguments
function kebede(x) {
  console.log("kebe selam now ?");
  // console.log(x);
  return x; // return the value to the caller  a place holder  that takes the values and want to use the the values and give back the value from the fuction rather than just displaying the values on the console log its back the values to the calller
}
// kebede("my Name is abdisa waritu");
let returnedValue = kebede("my name is abdisa waritu");
console.log(returnedValue);
//here retrunvalue is  my namis  aba but if its console the valuable value is undefined

const average = (num1, num2) => {
  let avg = adder(num1, num2) / 2;
  return avg;
};
let avgResult = average(50, 5000);

console.log(avgResult);
// the code after return is ignored  unreachable

// varaible scoping
// block level scoping let and const   { let c, const c =10  only accessible and visislbe inside the this block if though  inside functin , if otehrs block  }  var is not blocked scoped
// function scoping   var  function scoped variable
// global scopeing outside of the funtion  uisng the three varialbe declarion  it works everyone

// global = outside the house evertyone can see it
// function =  inside one room
// blocked = inisde a box in the room

// arrow function = simplied way of writing function
// it have its own uses over other function declaration
// the trick to remeber ( ) => {}
const square = (x) => x * x; // this is the fuction using the arrow function  that takes an paramter x and return a  the square the that number it takes using the arrow fuctnin
// const square  = (x) =>{
//   return x* x ;
// }
// const square= function (x){
//   return  x*x;
// }
// function square  (x){
//   return  x*x;
// }
let sqr = square(3);
console.log(sqr);

// conditional statement  based on the truthfullness of the condition if its true the if blocked of code executed   if the condition is false the if blocked is ignored  if the given condition is met the if statements is executed if not its ingored  the condtion to evaualte the somehting  the decision  true or flase the action which is performed based on condtion    the loop repeat or not based on dection of the conditon using if , if else  , if else if,  else  the if condition is checked always before deciciding the  decision

if (true || false) {
  console.log("since the condtion is met true this line of code is executed");
}
// else if( true){

// }
else {
  console.log("this is always exectuted after the if block if false");
}
// if (condition1) {
//   // Code
// } else if (condition2) {
//   // Code
// } else if (condition3) {
//   // Code
// } else {
//   // Default code
// }
//Ternary Operator (? :)

//This is a short form of if...else.

//Syntax
//condition ? expressionIfTrue : expressionIfFalse;  this is the ternary code is the short hand writing of the if else statment
let light = "red";
switch (light) {
  case "red":
    console.log("stop");
    break;

  case "green":
    console.log("go ");
    break;

  case "yellow ":
    console.log("get ready ");
    break;

  default:
    console.log("invalid light ");
}
