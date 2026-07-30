// alert("MY js file is Connected");

// Question 1   Define a simple function named myFirst that prints the word "hello " on the console
function myFirst() {
  console.log("Hello,World");
}
myFirst();
// function definition using arrow function
const myFirst1 = () => {
  console.log("Hello,World using Arrow function");
};
myFirst1();
// function definition using function expression
const myFirst2 = function () {
  console.log("Hello , world using  function expression ");
};
// Question 2  Define a function called mySecond  that takes a parameter and prints the parameter on console
myFirst2();
// Arrow function
const mySecond = (firstName, middleName) => {
  console.log(` MY Name is :${firstName} ${middleName} `);
};
mySecond("Abdisa", "Waritu");
// Question 3    Define the function called myThird that takes a parameter  and prints the paramter on the console . but it used mySecond function ot print the parameter on the console

const myThrid = (firstName, middleName) => {
  mySecond(firstName, middleName);
};
myThrid("Abdi", "Waritu");
//Question 4  write the function named myFourth that takes an array as a paramter and prints only the first value of the array on the console

function myFourth(mySkillList) {
  console.log(mySkillList);
  console.log(mySkillList[0]);
}
let mySkill = ["Html", "Css", "Js", " Java", " bootstrap"];
myFourth(mySkill);

// Question 5  write a function name myFifth that takes an array with an array with two number in it  as a  parameter  and prints the sum of the two number on console

// function myFifth (list){

//     console.log( list[0] + list[1]);
// }
// myFifth([10,20])
function ArraySum(numbers) {
  if (!Number.isFinite(numbers[0]) || !Number.isFinite(numbers[1])) {
    console.log("Please enter valid numbers.");
    return;
  }

  let sum = numbers[0] + numbers[1];

  console.log(sum);
}

ArraySum([10, 20]);
ArraySum([20, 30]);
ArraySum(["abdisa", 4]);
ArraySum([NaN, NaN]);

// Question on function from edabit

// Question 6
function minuteConv(minute) {
  if (typeof minute !== "number" || minute < 0) {
    // if (Number.isFinite(minute)){clg    "valid number"}    else {invalid}
    return "enter the positive number and valid number";
  } else {
    let second = minute * 60;
    return second;
    // return minute*60;
  }
}
let result = minuteConv(10);
console.log(result);

// Question 7  create a function that takes a number as a parameter , increments the number by  +1 and returns the result

function increment(number) {
  if (Number.isFinite(number)) {
    number += 1; // number = number + 1;
    return number;
  } else {
    return "please provide the valid numbers";
  }
}
let increNum = increment(10);
console.log(increNum);
// Question 8  write a function that takes  the base and height of a triangle   and returns its area
const trinagleArea = (base, height) => {
  if (!Number.isFinite(base) || !Number.isFinite(height)) {
    return "Please enter valid number ";
  } else if (base <= 0 || height <= 0) {
    return "please enter the positive number the base and height of traingle can't be negative numbers";
  } else {
    let areaOfTraingle = (base * height) / 2;
    return areaOfTraingle;
  }
};
let areaResult = trinagleArea(3, -3);
console.log(areaResult);

/*  Question 9  create a function that returns the total number of legs of all the animals . in this challenge a farmer is asking you to tell him how many legs can  be counted  among all the  animals . the farmer breeds three species (chickeks  = 2 legs  , cows = 4 legs , pigs  = 4 legs ). remember: the farmer wants to know the total number of legs and not thre total  number of animals   */
//  validate the given input during the alogrithm

function totalLegs(NumberOfChickens, NumberOfCows, NumberOfPigs) {
  if (
    Number.isFinite(NumberOfChickens) &&
    Number.isFinite(NumberOfCows) &&
    Number.isFinite(NumberOfPigs)
  ) {
    let totalNumberLegs =
      2 * NumberOfChickens + 4 * NumberOfCows + 4 * NumberOfPigs;
    return totalNumberLegs;
  } else if (NumberOfChickens < 0 || NumberOfCows < 0 || NumberOfPigs < 0) {
    return "please provide the positive number";
  } else {
    return "please provide the valid numbers";
  }
}
let total = totalLegs(5, NaN, NaN);
console.log(total);

// Question 10
/* Create a function that takes an array containing only TWO numbers as a parameter  and returns a value that is 3 times the first element of the array */

const arrayFirstElementMult = (array) => {
  // check if both number of array is valid number
  if (!Number.isFinite(array[0]) || !Number.isFinite(array[1])) {
    return " please provide the valid number";
  } else {
    let secondElemetOfArray = 3 * array[0];
    return secondElemetOfArray;
  }
};

let secondElement = arrayFirstElementMult([2, 3]);
console.log(secondElement);

/* ===========  Question on conditional statements ==========*/

// Question 11
/* create a function that returns true when num1 is equal to num2 ; otherwise retrun false  */

function isEqual(num1, num2) {
  //   ()) {
  //   return " please enter the valid numbers ";
  // } else if (num1 === num2) {
  //   return true;
  // } else {
  //   return false;
  // }
  return !Number.isFinite(num1) || !Number.isFinite(num2)
    ? "please enter valid numbers"
    : num1 === num2
      ? true
      : false;
  // condition ? truestatement : false statement
  // let num = 10
  //let result =  num % 2 == 0 ? "The number is even" : "the number is odd"
}
let compareNumber = isEqual(4, 4);
console.log(compareNumber);

// Question 12
/* create a function that takes an integer and returns tru if its divisible by 100, otherwise return false */

// Number.isInteger check if the value is the integer or not   it doesnt include the decimal parts only check the interger

const isDivisible = (integer) => {
  if (Number.isInteger(integer) && Number.isInteger(integer / 100)) {
    return true;
  } else {
    return false;
  }
};
let isDivInte = isDivisible(50);
console.log(isDivInte);

// Question 13
/*  create a function that takes  a number as an argument and returns   "even" for even numbers and " odd " for odd numbers */

function parityChecker(number) {
  if (!Number.isFinite(number)) {
    return " please provide the valid number ";
  } else if (number % 2 === 0) {
    return "it's  even ";
  } else {
    return "it's odd";
  }
}
let evenOrOdd = parityChecker(8);
console.log(evenOrOdd);

// Question 14
/* create a function that returns 
  "invalid score "  if score is above 100 ore score is negative number 
  "Grade A" when score is between 90 and 100  ( both 90 and 100 included)
  "Grade B " when score is betweeen 80 and 89  (both 80 and 89 included)
  "Grade C" for any score below 79
  */

const gradeCheck = (score) => {
  if (!Number.isFinite(score)) {
    return "please provide the valid score";
  } else if (score < 0 || score > 100) {
    return "invalid score";
  } else if (score >= 90 ) {
    return " you got Grade A";
  } else if (score >= 80 ) {
    return "you get Grade B";
  } else {
    return " you get Grade C";
  }
};

let grade = gradeCheck(79);
console.log(grade);




