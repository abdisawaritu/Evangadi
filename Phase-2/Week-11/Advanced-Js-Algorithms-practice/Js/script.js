//  Js advanced algorithm writing
// Problem #1
// write  a function that takes a string aand return the hidden word in it .
/* What is hiding amongest the Crowd   A word in on the  loose  and now has tried to hide amongest to crowd of tall letters help write a function to dected what the word is  , knowing the following rules 
 the wanted word is in lowercase  ,  the crowd of letters is all in uppercase  . Note that the word weill be spread out amongest random leters but their letters  remain   in the same order . */

//examples
// detectWord ( "UUUUcTJJJJFFaUUUUUt") == "cat";

// for every letter  check if uppercase
// use charAt method to take off a single letter from the crowd
// if upper case ignore  and skip
// if not, collect  the letter   on the same variables
// continue untill the the end  and collect the lower case   together   keeping their order   that is the answer

// write the pseducode
// Begin
// define a function  detectWord  that takes a  string as an parameter
//  step 1 :  initiliaze an empty result  a string  result " "
//  let hiddenWord  = ""  // accumulator to store the hidden words
// -   for loop to iterate through each letter   for of loop each charater of the string
//   -  check if the letter  is upper case and lower case (How?)
// for each chare In imuo stirn check if the chare is lowrcase  "a "  to "z" //      - by using the string built method  (toLowecase and toUpperCase)  by using  convert the letter to uppercase and compare it with  the original by using  the  to use toUpperCase () method  if equal then ite uuuper case and skip
//  if not (else)   save the value  on the hiddenWord variable the accumlator
// and return the variable
// End  if
// End
// test the psudocode

// transate the psedocode into js code

let str = "Hello,World";
console.log(str.charAt(0));
console.log(str.charAt(1));

// bracket  Notation
console.log(str[2]);
console.log(str[3]);

let singleLetter = str.charAt(0); // H

console.log("orginal", singleLetter);
console.log("After conversion to  lowercase", singleLetter.toLowerCase());
console.log(singleLetter.toUpperCase());

////    charCodeAt()  return  the unicode of the letter
//   A - Z   range from decimal  65 to 90
//   a - z   range from decimal  97  to 122
console.log(str.charCodeAt(0));

function findHiddenWord(anyString) {
  let hiddenWordCollector = "";
  for (let i = 0; i < anyString.length; i++) {
    // console.log(anyString.charAt(i)); // for testing or debuggin purpose

    let originalLetter = anyString[i];
    if (originalLetter === originalLetter.toLowerCase()) {
      // console.log(originalLetter);

      hiddenWordCollector += originalLetter;
    }
  }
}

function detectWord(str) {
  let hiddenWord = "";
  for (char of str) {
    // console.log(char)
    if (char === char.toLowerCase()) {
      hiddenWord += char;
    }
    // console.log(char);

    // let singleLetter = str.charAt(char);
  }
  return hiddenWord;
  // for (let i = 0  ; i < str.length  ; i++){
  //     let singleLetter = str.charAt(i);
  //     console.log(singleLetter)
  // }
  // return hiddenWord;
}
console.log(detectWord("absSSSa"));
console.log(detectWord("ABDISAabdisaWARITUwaritu"));

function findHiddenWord(inputString) {
  let result = "";
  //   for (string of inputString) {
  //     if (string[])

  //   }
  // the string character can be accessed using the  similar method to the array  using thier character index
  for (let i = 0; i < inputString.length; i++) {
    //   console.log(inputString[i]);
    //   console.log(inputString[i].toLowerCase());
    // if (inputString[i] === inputString[i].toLowerCase()) {
    //   result += inputString[i];   "3" to lower and upper case it self to avoid we have reversed the logic    // }
    if (inputString[i] !== inputString[i].toUpperCase()) {
      result += inputString[i];
    }
  }
  return result;

  for (let i = 0; i < inputString.length; i++) {
    // console.log(inputString[i]); // like the array using the index
    if (inputString[i] >= "a" && inputString[i] <= "z") {
      // console.log(inputString[i]);
      result += inputString[i];
    }
  }
  //   console.log(result);
  return result;
}
console.log(findHiddenWord("ABD12345  ,ISAab ,  diWARITU"));
console.log(findHiddenWord("UcUNFYGatNUH"));
console.log(findHiddenWord("ASD"));
// TESTING AND DEBUGGING FOR THE DIFFERENT INPUT

// Method 3

// using the array built method filter
// string method and array method differeniate between them

function findWord(string) {
  //   console.log(string.split(""));
  let arrachar = string.split("");
  let hiddenword = arrachar.filter(
    (singleLetter) => singleLetter !== singleLetter.toUpperCase(),
  );
  //
  return hiddenword.join("");
}
console.log(findWord("abdisaABD"));

// problem #2( edabit )
/*  create a function  that returns  true if the first array can be nested inside the second */

//  array1 can be nested inside arra2   if :
// array1 min value is greater  than array2 min value   and
// array1 max value is less thatn arra2 max value
// arra2 minimum needs to be less than array -1 minimun
// aaray2 maximum  needs to be greater that  array1 maximum

// array1 , array2
// check if both input are array
// return  valid array  using the Array.isArray();
// finding the array max amd min values
// using the sort method and comparing the values  of the sort value and differnt index   to get the min and max
function isNest(array1, array2) {
  if (!(Array.isArray(array1) && Array.isArray(array2))) {
    // also check if all the values of the array is number
    return "please provide the valid array ";
  }

  let array1Sorted = array1.sort();
  console.log(array1Sorted); // only compare alphabetically
  let array2Sorted = array2.sort();
  console.log(array2Sorted);
  let array1Min = array1Sorted[0]; // to get the first minimam after sorting
  let array2Min = array2Sorted[0];
  let array1Max = array1Sorted[array1.length - 1]; // to get the last index through index to make dynamic  for any array

  let array2Max = array2Sorted[array2.length - 1];

  if (array1Min <= array2Min || array1Max >= array2Max) {
    return false;
  }
  return true;
}
console.log(isNest([1, 3, 4, 5], [3, 4, 5, 6]));
console.log(isNest([6, 0, 11], [6, 1, 9]));
// test and debug and validate the given inputs

// pseudocode
// Define the function called nested array ( array1 , array2 )
// step2 : sort both arrays in ascending order
// sort array1 and sort array2
// get the minimun  and maximum values from the sorted arrays  // min1 = array[0]   max1 = array[ar.len i 1 ]
// the same is tue for the sencond and array and check both of the condition  and return true
// check the condition
// if min2< min 1 and  miax 3 < max1 the return true
// else return false
// end if
// end function  //

//   method1 using the sort array method
function nestedArray(arr1, arr2) {
  let sortedArray1 = arr1.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray1);
  let sortedArray2 = arr2.sort(function (a, b) {
    return a - b;
  });
  console.log(sortedArray2);

  let arrayONeMin = sortedArray1[0];
  let arrayTwoMin = sortedArray2[0];
  let arrayONeMax = sortedArray1[arr1.length - 1];
  let arrayOTwoMax = sortedArray2[arr2.length - 1];

  // check the condition
  if (arrayONeMin > arrayTwoMin && arrayONeMax < arrayOTwoMax) {
    return true;
  }
  return false;
}
console.log(nestedArray([2, 3, 4, 6, 5, 7], [6, 5, 1, 4, 8]));
// sorting usese string and compare their as code  4 with 1 anot 12 ;

// method 2
function nestedArray(arr1, arr2) {
  let arrayONeMin = Math.min(...arr1);
  let arrayONemax = Math.max(...arr1);
  let arrayTwoMin = Math.min(...arr2);
  let arrayTwoMax = Math.max(...arr2);
  // check the condition
}
// spread operator , destruction and rest operator

// desttruction  unpack the values and use it
// Array desctruction
let number = [1, 2, 3, 4];
console.log(number[0]);
const [first, second] = number; // order of the destruction is matter
console.log(first);
console.log(second);

// object destruction

let user = {
  name: {
    firstname: "abdi",
    secondName: "wari",
  },
  age: 22,
};
const { name, age } = user; // order not maters here the key is used .
// for the nested object
const {
  id,
  ages,
  name: { firstname, lastName },
} = user;
console.log(firstname);

let arra = [1, 3, 3];
let copyar = [...arra];
console.log(copyar);
// spread operator   ... arry and
// use case
// copy arrays
//  merging arrays
let arr1 = [1, 3];
let arr2 = [4, 5, 2];
let combo = [...arr1, ...arr2];
console.log(combo);

// spreading in function calls

function greet(name, name2, name3) {
  console.log(`Hello   , ${name}   , $ {name1} , ${name2}`);
}
let names = ["alice ", "bob ", "charlie"];
greet(...names);
//

// rest operator
// use to collect  rather than expanding

// desctruction with rest operator
// const ar = [1, 2, 3, 4, 5, 5, 6];
// const [first, secod, ...rest] = ar;
// console.log(first);
// console.log(rest); //destructed array
let users = {
  name: "abebe",
  age: 30,
  passoword: "1234",
};
const { passoword, ...rest } = user;
console.log(passoword);
console.log(rest);
// multiple paramter  of the function
function test(...num) {
  console.log(num);
}
test(1, 2, 3); // unlimited number of parameter

// check if the give array is array and contains only numbers  ecaatly the whole number or natural numbers
// exception validation of the inputs is very important

// The magic array function

/*  array is defined to be a magica array if the sum of the primes in the array is equal to the friste of the array if there are no primes in the array, the first element must be 0 ;       [21, 3, 7 , 9, 11, 4, 6 ] is the magic array becaseu  of 3, 7 , 11 are  the primes  in the array and they  sum to 21 which is the first  element of tharr ay    ] 13 , 4, 4, 4 is  is also t magic array  arrsy   //   [ 8 ,5, -5, 3 ] is not a magic array  bc the sum of the primes is  13 notes that i4 is not a prie becasue prime number are positive    * /
// write a fucntion named isMagicarray that returns 1 if ite integer  array argument is a Magic  array.otherwise is return 0;
// Prime number 
//  a prime number an  a natural number greate than 1   that has no posibe divisor other than 1  and itself or  a number that have only  factor 1 and itself 
// the sum of the prime number of array is equal to   first element   of the array
// check each element  if  there is a prime or not
// if prime  stores it on some varaibles  that is result = 0
// check if prime or not
//     if yes  add on sum
//        compare the sum with  the first values of the array
//               if equal     the array is the magic array
//
//   Define the  function isMagicArray that takes a parameter a
// check if the give array is array and contains only numbers  ecaatly the whole number or natural numbers
// define the variable sum = 0 ;
//           - for every elemenet
//                   - check if prime or not  using module operator

function isMagicArray(array) {
  var sum = 0;
  for (let i = 0; i < array.length; i++) {
    let num = a[i];
    let isPrime = true;
    if (num === 2) {
      sum += num;
    } else if (num > 2) {
      for (let j = 2; j < num / 2 + 1; j++) {
        if (num % j == 0) {
          isPrime = false;
        }
      }
       if (isPrime){
        sum += num;
      }
    }
  }
  if (array[0] === sum) {
    return 1;
  }
  return 0;
}*/

// we need two function one check if the array is magic or nor one check if the number is prime or num

// prime number for the positive integer

// pseducode ( checking the num prime or not )
// Define functin isPrime(num)
//    If num<=  1 ;
//   - return  false ;
// if num ===2
//    return true ; 2 is prime number
//  if  num % 2 === 0    // even number is not prime number  are
// step 2: check odd divisors up to (num)* 0.5
// for i from 3 to square root of number increent by 2
// if num % i === 0
//     return false ;  since its divisisible its not prime number
// steps 3 : No divisores found -> is prime
// return ture
// end if end function

//
const isPrime = (num) => {
  // checker function have is at the front of name isFunction and return false or trues based on logic
  let iteration = 0;

  if (num <= 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  if (num % 2 === 0) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
    iteration++;
  }
  console.log(iteration);
  return true;
};
let result = isPrime(9);
console.log(result);

// for every factor  greater than the squaure root. thier is a corresponding factor that is less than the square root ;

//psedo code for the magic array
// define a function isMagicArray (arr)
// intilialize the  sum of primes   sumofprime= 0
//  iterate through each element  from i = 0 to arrlength Do:
//           check if the current element is prime
//    prime = isPrime(arr[i])
//             if prime ===true  then
//                   sumOfPrimes = sumOfPrimes  + arr{i}

// optimization  : early exit if  sum exceeds first elemet
// if sum > arra[0]
//       return 0
//        determine the magic array condition
// if sum   ====arr[0]
//   return 1;
//   else
//        return 0

// end if
// end function

function isMagic(array) {
  let sumOfPrime = 0;
  for (let i = 0; i < array.length; i++) {
    // console.log(array[i]);
    // const element = array[i];
    // console.log(element);
    let prime = isPrime(array[i]);
    if (prime) {
      sumOfPrime += array[i];
    }
    if (sumOfPrime > array[0]) {
      return 0;
    }
  }
  if (sumOfPrime === array[0]) {
    return 1;
    // curlbrace can be ignored
  }
  return 0;
}
console.log(isMagic([21, 3, 7, 9, 11, 4, 6]));
// test using console log if problem happens
// problem 4

// sorting algorithm  without using the built method  the bubble sorting
// sort();  // bubble sorting
//
// Define a function bubbleSort takes array as an argument
// for every
//      for loop
//            get the first  value from index i
//          get the second value form index i + 1 ;
//         compare  with with each
//          if  the first value greater than the second values swap them   how can swap variable values
//temp = array[i];
// array [i]  second value

//   array[i+1] == temp;
// one swap is not  enough to sort the given array
// while loop  we use  when we dont know the number of iteration to ckeck addition swapping
// I need the way to track if additional  looping is necessary
///  to do this we use the while loop
// a = true
// while (true){
//   a = false
//      for ( ){
//                     a = true }

//}

// function bubbleSort(array) {
//   let numbers = array;

//   let checker = true;
//   while (checker) {
//     checker = false;
//     for (let i = 0; i < array.length - 1; i++) {
//       if (numbers[i] > numbers[i + 1]) {
//         checker = true;
//         let temp = numbers[i];
//         numbers[i] = numbers[i + 1];
//         numbers[i + 1] = temp;
//       }
//     }
//   }

//   return numbers;
// }
// let sortedArray = [12, 9, 33, 5, 89];
// let tests = bubbleSort(sortedArray);
// console.log(tests);
// in interivew question is not permitted to use the  built js method
// problem  Bubble sorting
// write  a function  that takes an array of numbers and  return another aray by sortin the number in an asceding order . IN  in short write a function that does the same thing the sort( method of the array which is the built in method )
// using nested loop and   using the while loop method second method
// swapping  values in javascript
let array = [12, 9, 33, 5, 89];
console.log("the original array", array);
// let temp = array[0];
// array[0] = array[1];
// array[1] = temp;
// console.log(array);
// using destrictuing  swapping  the vales of the variables

// [array[0], array[2]] = [array[2], array[0]];
// console.log(array);

// function bubbleSort(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length - i - 1; j++) {
//       console.log("comparing ", array[j], array[j + 1]);
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//       // console.log(array);
//     }
//   }
//   return array;
// }
// // bubbleSort([12, 9, 33, 5, 89]);
// console.log(bubbleSort([5, 3, 8, 1, 9, 7, 10, 34, 2, 4]));

// using the while loop
function bubbleSorts(array) {
  let isSorted = true; // they are called flags  to check true or false of given condition

  while (isSorted) {
    isSorted = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        isSorted = true;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
}
console.log(bubbleSorts([5, 3, 8, 1, 9, 7, 10, 34, 2, 4]));
