// alert( "js is connected")
/* ========== Question on decision loops =========*/
// Question 1
/* write a function that prints the first 10 integers on th console starting from the number 1 using the javascript for loop */

const firstTenIntiger = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
};
firstTenIntiger();

// Question 2
// write a function that takes a single number as an argument and prints the next 5  numbers in the console .NOte :each output should be displayed on a new line.

function nextFive(number) {
  if (!Number.isFinite(number)) {
    return "please provide the valid number";
  }

  for (let i = 1; i <= 5; i++) {
    console.log(number + i);
  }
}
console.log(nextFive(12));

// Question 3
/* write a function  that takes a single number and prints the sum of the nect 10 numbers after the given number. */
function adder(numbers) {
  let sum = 0;
  for (let i = 1; i <= 10; i++) {
    // return sum = sum + i
    sum = sum + (numbers + i);
  }
  return sum;
}
console.log(adder(7));

// Question 4
/* write a function that takes an array as an argument  and prints every element of the array on the console */

function array(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log([1, 2, 3, 4, 5]);
// using the for.... of  loop

// for (let variable of iterable) {
//   // code to execute
// }
function arrays(arrs) {
  for (const ar of arrs) {
    console.log(ar);
  }
}
console.log([1, 3, 3]);

// Question 5
/* write a function that takes an array as an argument and prints the total number of elements found in the array */
function totalNumberOfArray(arr) {
  console.log(arr.length);
}
totalNumberOfArray(["html", " css ", "javascript ", "bootstrap"]);

// Question 6
/* write a function that takes an array on numbers as a parameter and log in the console the sum of all the numbers in the array . */

function sumOfArray(arrayNumber) {
  let sum = 0;
  for (let i = 0; i < arrayNumber.length; i++) {
    sum = sum + arrayNumber[i];
  }
  return sum;
}
let result = sumOfArray([3, 0]);
console.log(result);

// Question 7
/* write a function that takes an array of all numbers as a parameter , substacts the total sum of all the odd numbers of the array from the total sum of all even numbers and logs the result in the console */

function oddEvenSubstract(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isFinite)) {
    return "please enter the valid number array ";
  }
  let sumOfEven = 0;
  let sumOfOdd = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      sumOfEven = sumOfEven + numbers[i];
    } else {
      sumOfOdd = sumOfOdd + numbers[i];
    }
  }
  return sumOfEven - sumOfOdd;
}

let arrSub = oddEvenSubstract([5, 6, 99, 8, 76, 4, 68, 44]);
console.log(arrSub);

// Question 8
/*● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)*/

let arrarEvenIndexCheck = (array) => {
  if (!Array.isArray(array)) {
    return "please provide the valid array :The input is not array";
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        console.log(array[i]);
      }
    }
  }
};
arrarEvenIndexCheck([5, 6, 99, 8, 76, 4, 68, 44]);

// Question on built in javascritp methods
// Question 9
