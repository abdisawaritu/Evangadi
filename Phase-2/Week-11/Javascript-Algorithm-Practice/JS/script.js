// very easy Question
function adder(number1, number2) {
  // validation is required
  let sum = number1 + number1;
  return sum;
}
function incNumber(num) {
  if (Number.isInteger(num)) {
    num++;
    return num;
  } else {
    return " please provide the valid  integer number ";
  }
}
console.log(incNumber(0));
console.log(incNumber(9));
console.log(incNumber(-3));
console.log(incNumber(9.5));

// 1 year  = 365 days ;
const ageToDayConverter = (age) => {
  if (Number.isInteger(age) && age >= 0) {
    let day = age * 365;
    return day;
  } else {
    return " please provide valid age numbers ";
  }
};
console.log(ageToDayConverter(65));
console.log(ageToDayConverter(0));
console.log(ageToDayConverter(20));

function calculator(expression) {
  return eval(expression);
}
console.log(calculator("23+4")); // 27
console.log(calculator("45-15")); // 30
console.log(calculator("13+2-5*2")); // 5
console.log(calculator("49/7*2-3")); // 11
// eval("console.log('hello, world')");

function arrangment(num) {
  if (Number.isInteger(num) && num > 0) {
    return Math.pow(2, num);
  } else {
    return "please provide valide integer number ";
  }
}
console.log(arrangment(1));
console.log(arrangment(3));
console.log(arrangment(10));

function imposterFormula(imposter, playerCount) {
  return `"${Math.round(100 * (imposter / playerCount))}%"`;
}
console.log(imposterFormula(1, 10)); // "10%"
console.log(imposterFormula(2, 5)); //  "40%"
console.log(imposterFormula(1, 8)); //"13%

const isLeapYear = (year) => {
  if (Number.isInteger(year) && year >= 0) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 1000 !== 0)) {
      return true;
    } else {
      return false;
    }
  } else {
    return "please provide the valid number years ";
  }
};
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(1968));
console.log(isLeapYear(1000.5));

function numberOfStickers(n) {
  return 6 * Math.pow(n, 2);
}
console.log(numberOfStickers(3));

function firstElement(array) {
  return array[0];
}
console.log(firstElement([1, 2, 3, 4, 4]));

// electrical power calculator
function power(voltage, current) {
  return voltage * current;
}
function maximamEdgeOfTriange(side1, side2) {
  if (
    Number.isInteger(side1) &&
    Number.isInteger(side2) &&
    side1 > 0 &&
    side2 > 0
  ) {
    return side1 + side2 - 1;
  } else {
    return "please provide the valid positive integer numbers";
  }
}

console.log(maximamEdgeOfTriange(8, 10));
console.log(maximamEdgeOfTriange(-1, 10));

// there is a single operator in js  capable of providing the reminder of the division operator that is the modulo operator (%)

const remainder = (dividend, divisor) => {
  // validate wheather the input are negative integers
  return dividend % divisor;
};

function nameString(string) {
  return `"  ${string}Edabit"`;
}

// Easy Question

// Js bitwise operator
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 4);
console.log(~5);
//  <<  left shift
//  >>   right shift
//   >>> zero fill right shift
console.log(5 & 3);
console.log(5 | 3);
console.log(5 ^ 3);
console.log(~5);
console.log(5 << 1);
console.log(20 >> 1);

console.log((1).toString(2));
console.log((2).toString(2));
console.log((3).toString(2));
console.log((4).toString(2));
console.log((5).toString(2));
console.log((6).toString(2));
console.log((7).toString(2));
console.log((8).toString(2));

console.log((1).toString(2).padStart(8, "0"));
console.log((5).toString(2).padStart(8, "0"));
console.log((10).toString(2).padStart(8, "0"));
console.log((15).toString(2).padStart(8, "0"));
console.log((255).toString(2).padStart(8, "0"));
console.log((255).toString(2).padStart(8, "0"));

// function bitwiseOperator(num1, num2) {
//   let binary1 = num1.toString(2).padStart(8, "0");
//   let binary2 = num2.toString(2).padStart(8, "0");
//   // console.log(binary1);
//   // console.log(binary2);
//   return `${binary1 & binary2.toString().padStart(8,"0")} ${binary1 | binary2} ${binary1 ^ binary2}`;

// }
// console.log(bitwiseOperator(6, 23));
function bitwiseOperator(num1, num2) {
  let binary1 = num1.toString(2).padStart(8, "0");
  let binary2 = num2.toString(2).padStart(8, "0");

  let andResult = (num1 & num2).toString(2).padStart(8, "0");
  let orResult = (num1 | num2).toString(2).padStart(8, "0");
  let xorResult = (num1 ^ num2).toString(2).padStart(8, "0");

  return `
num1: ${binary1}
num2: ${binary2}

AND: ${andResult}
OR:  ${orResult}
XOR: ${xorResult}
`;
}

console.log(bitwiseOperator(6, 23));

function addUntilNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUntilNum(4));

// left shift operator

//number << positions

function shiftToLeft(number, position) {
  return number * Math.pow(2, position);
}

// function findSmallestAndLargest(array) {
//   let sortedArray = array.sort(function (a, b) {
//     return a - b;
//   });
//   let MandM = [sortedArray[0], sortedArray[sortedArray.length - 1]];
//   return MandM;
// }
// console.log(findSmallestAndLargest ([1,2,3,4,5]))

function maxMin(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }
  let minmax = [min, max];
  return minmax;
}

console.log(maxMin([1, 3, 4, 5, 7, 8, 10]));

function timeForMilkAndcookies(date) {
  return date.getMonth() === 11 && date.getDate() === 24;
}


function whichIsLarger (  ( ) => a , () => b){

}
// Higher order function and callback function 
// Important points on these topics 
// arrow function makes the callbacks shorter 

