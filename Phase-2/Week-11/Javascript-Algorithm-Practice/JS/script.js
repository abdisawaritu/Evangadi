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
