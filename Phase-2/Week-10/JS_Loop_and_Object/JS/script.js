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
// Question 1 using while loop
function firstTenInt() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}
firstTenIntiger();

// Question 2
// write a function that takes a single number as an argument and prints the next 5  numbers in the console .NOte :each output should be displayed on a new line.

function nextFive(number) {
  // check if the input is a valid number
  if (!Number.isFinite(number)) {
    return "please provide the valid number";
  }
  for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      return;
    }
    console.log(number + i);
  }
}

// for(let i = number+1 ; i<= number+5 ; i++){
//   console.log(i);
// }

nextFive(7);
// nextFive(10);
// nextFive("2");

// Question 3
/* write a function  that takes a single number and prints the sum of the nect 10 numbers after the given number. */
function adder(numbers) {
  // check if the input is a valid number
  if (!Number.isFinite(numbers)) {
    return "please provide the valid number";
  } else {
    let sum = 0;
    for (let i = 1; i <= 10; i++) {
      // return sum = sum + i
      sum = sum + (numbers + i);
    }
    // for ( let i = numbers + 1  ; i <=  numbers + 10  ; i++){
    //   sum+= i;
    // }
    
    return sum;

    
  }
}
console.log(adder(7));

// Question 4
/* write a function that takes an array as an argument  and prints every element of the array on the console */

function array(arr) {
  if (!Array.isArray(arr)) {
    console.log("please provide the valid array :The input is not array");
  } else {
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
    }
  }
}
array(["html", " css ", "javascript ", "bootstrap"]);
array([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// using the for.... of  loop

// for (let variable of iterable) {
//   // code to execute
// }
function arrays(arrs) {
  // if (!Array.isArray(arrs)) {
  //   console.log("please provide the valid array :The input is not array");
  // }
  for (const ar of arrs) {
    console.log(ar);
  }
}
arrays(["html", " css ", "javascript ", "bootstrap"]);
arrays([1, 2]);
arrays([1, "Hello", 8, 44]);
// using the array built in Method
let numArray = [1, 2, 3, 4, 6, 7];
numArray.forEach((element) => {
  console.log(element);
});

// Question 5
/* write a function that takes an array as an argument and prints the total number of elements found in the array */
function totalNumberOfArray(arr) {
  // if (!Array.isArray(arr)) {
  //   console.log("please provide the valid array :The input is not array");
  // } else {
  //   console.log(arr.length);
  // }
  !Array.isArray(arr)
    ? console.log("please provide the valid array :The input is not array")
    : console.log(arr.length);

  // (!Array.isArray(arr)) ? "please provide the valid array :The input is not array" : console.log(arr.length);
}
totalNumberOfArray(["html", " css ", "javascript ", "bootstrap"]);
totalNumberOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
totalNumberOfArray(["world", 13]);
totalNumberOfArray([1, "Hello", 8, 44]);
// using the ternary and arrow function
const totalArray = (arr) => console.log(arr.length);
totalArray([1, 2, 3, 4, 5]);

// Question 6
/* write a function that takes an array on numbers as a parameter and log in the console the sum of all the numbers in the array . */

function sumOfArray(arrayNumber) {
  // check if the input is a valid number array
  if (!Array.isArray(arrayNumber) || !arrayNumber.every(Number.isFinite)) {
    console.log("please enter the valid number array ");
  } else {
    let sum = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
      sum = sum + arrayNumber[i];
    }
    return sum;
    //     return arrayNumber.reduce(function (sum, currentNumber) {
    //       return sum + currentNumber;
    //     }, 0);
  }
}
let result = sumOfArray([3, 0]);
// console.log(result);
console.log(`The sum of the array is: ${result}`);
console.log(sumOfArray(["5", 6, 99, 8, 76, 4, 68, 44]));

// function sumOfArray(arrayNumber) {
//   // Check if the input is a valid number array
//   if (!Array.isArray(arrayNumber) || !arrayNumber.every(Number.isFinite)) {
//     console.log("Please enter a valid number array.");
//   } else {
//     return arrayNumber.reduce(function (sum, currentNumber) {
//       return sum + currentNumber;
//     }, 0);
//   }
// }

// let result = sumOfArray([3, 0]);

// console.log(`The sum of the array is: ${result}`);

// console.log(sumOfArray([5, 6, 99, 8, 76, 4, 68, 44]));

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
console.log(oddEvenSubstract(["5", 6, 99, 8, 76, 4, 68, 44]));

// Question 8
/*● Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)*/

let arrarEvenIndexCheck = (array) => {
  if (!Array.isArray(array)) {
    console.log("please provide the valid array :The input is not array");
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        console.log(array[i]);
      }
    }
  }
};
arrarEvenIndexCheck([5, 6, 99, 8, 76, 4, 68, 44]);
arrarEvenIndexCheck([11, "Sam", 3, 7, "car"]);

// Question on~ built in javascritp methods
// Question 9
// Question 9 and 10 are dependent on the sample Array provided below:

let sampleArrry = [5, 6, 99, 8, 76, 4, 68, 44];

function removeArray(sampleArrry) {
  // if (!Array.isArray(sampleArrry)) {
  //   return "please provide the valid array :The input is not array";
  // } else {
  //   for (let i = 0; i < sampleArrry.length; i++) {
  //     if (i === 7) {
  //       sampleArrry.pop();
  //     }
  //   }
  // }
  sampleArrry.pop();
  sampleArrry.push("32");
  return sampleArrry;
}
console.log(removeArray(sampleArrry));

//Question 10
/* write a function that takes  the sampleArray as an argument and  , sorts the array in ascedning  order and prints the  sorted arra on  the consle */

const sortArray = (sampleArrry) => {
  if (!Array.isArray(sampleArrry)) {
    return "please provide the valid array :The input is not array";
  } else {
    sampleArrry.sort(function (a, b) {
      return a - b;
    });
    console.log(sampleArrry);
  }
};
sortArray(sampleArrry);

/* ============== Question on javascript  objects ============*/
// The questions below (question  11 to 14) are based on  "evangadiClass  " object provided below

let evangadiClass = {
  lengthOfCourse: "1 Month",
  website: "https://www.evangadi.com/",
  isChallenging: false,
  topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
  students: [
    {
      name: "Abebe",
      age: 34,
      sex: "M",
    },
    {
      name: "Kebede",
      age: 44,
      sex: "M",
    },
    {
      name: "Almaz",
      age: 27,
      sex: "F",
    },
    {
      name: "Challa",
      age: 22,
      sex: "M",
    },
    {
      name: "Chaltu",
      age: 19,
      sex: "F",
    },
  ],
};

// Question 11
/* ● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change*/
evangadiClass.lengthOfCourse = "6 Month ";
console.log(evangadiClass);

// Question 12
/* ● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method
 */
evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass);

// Question 13
/* ● Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console
*/

// to access the age of each of the object of the element of the array
// evangadiClass.students[index].objectProperty
// evangadiClass.students[0].age    -->   34
// evangadiClass.students[1].sex     -->   M
// console.log(evangadiClass.students.length);

console.log(evangadiClass.students);

const ageAverage = (evangadiClass) => {
  let sumOfArray = 0;
  for (let i = 0; i < evangadiClass.students.length; i++) {
    sumOfArray = sumOfArray + evangadiClass.students[i].age;
  }
  console.log(` The total age sum of the students is :${sumOfArray}`);
  return ` The average of age students is :${sumOfArray / evangadiClass.students.length}`;
};
let ageAvg = ageAverage(evangadiClass);
console.log(ageAvg);
// the same question using the built array method

const totalAge = evangadiClass.students.reduce(function (total, studentAge) {
  return total + studentAge.age;
}, 0);

const aveAge = totalAge / evangadiClass.students.length;
console.log("the sum of the age is :", totalAge);
console.log("the average age is :", aveAge);

// Question 14
/* ● Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console
 */
console.log(evangadiClass.students[0].sex);
console.log(evangadiClass.students[1].sex);
console.log(evangadiClass.students[2].sex);
console.log(evangadiClass.students[3].sex);
console.log(evangadiClass.students[4].sex);
// console.log(evangadiClass.students[5].sex);

function calculatePercentage(evangadiClass) {
  let maleCount = 0;
  let femaleCount = 0;
  let malePercentage;
  let femalePercentage;
  for (let i = 0; i < evangadiClass.students.length; i++) {
    if (evangadiClass.students[i].sex === "M") {
      maleCount++;
    } else {
      femaleCount++;
    }
  }

  console.log("the total number of male is :", maleCount);
  console.log("the total number of female is :", femaleCount);
  malePercentage = (maleCount / evangadiClass.students.length) * 100;
  femalePercentage = (femaleCount / evangadiClass.students.length) * 100;
  console.log(` The percentage of male is :${malePercentage}%`);
  console.log(` The percentage of female is :${femalePercentage}%`);
}
calculatePercentage(evangadiClass);

//  PUZZLES QUESTION
//   Question 15: Test the divisors of three
/* ● Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number */
function testDivisorOfThree(number1, number2) {
  if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
    console.log("please provide the valid number");
  } else if (number1 > number2) {
    console.log("the first number must be higher than the second number  ");
  } else if (number1 === number2) {
    console.log("The one must be low and ther othes number must be high");
  } else {
    for (let i = number1; i <= number2; i++) {
      // console.log(` The number between ${number1}  and   ${number2} are:  ${i}`);
      if (i % 3 === 0) {
        console.log(`${i} :  divisible by three`);
      } else {
        console.log(`${i} :   the number is not divisible by three`);
      }
    }
  }
}
testDivisorOfThree(2, 19);

//   Question 16: The famous coding interview question (FizzBuzz)
/* ● Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz".
 */

const fizzBuzz = () => {
  for (let i = 1; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0) {
      console.log(`Fizz  ${i}`);
    } else if (i % 5 === 0) {
      console.log(`Buzz  ${i}`);
    } else if (i % 3 === 0 && i % 5 === 0) {
      console.log(`FizzBuzz  ${i}`);
    }
    // else {
    //   console.log("Neither of them")
    // }
  }
};
fizzBuzz();

//   Question 19: Evens number
/* ● An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise */
function isEvens(integer) {
  if (!Number.isInteger(integer)) {
    console.log("please provide the integer numbers");
  } else {
    // convert the number to an array to digits
    const digits = Math.abs(integer).toString().split("");
    return digits.every((digit) => parseInt(digit, 10) % 2 === 0) ? 1 : 0;
  }
}
console.log(isEvens(2426)); // 1
console.log(isEvens(3224)); // 0
console.log(isEvens(86420)); // 1
console.log(isEvens(1357)); // 0
console.log(isEvens(-2486)); // 1

// another Number  method without using  the built method ;
function isEvensNumber(num) {
  if (!Number.isInteger(num)) {
    return "please provide the valid integer";
  }

  num = Math.abs(num);

  while (num > 0) {
    let digit = num % 10;

    if (digit % 2 !== 0) {
      return 0;
    }

    num = Math.floor(num / 10);
  }

  return 1;
}

// Test Cases
console.log("test cases");
console.log(isEvensNumber(2426)); // 1
console.log(isEvensNumber(3224.3)); // 0
console.log(isEvensNumber(86420)); // 1
console.log(isEvensNumber(1357)); // 0
console.log(isEvensNumber(-2486)); // 1
console.log(isEvensNumber(222222222));
console.log(isEvensNumber("abdisa"));
