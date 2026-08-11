// Question 1
/*Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
○ Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
○ Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4]*/
// Psudocode
// Begin
//  Define the function getonlyEvensIndex   (array)
// check
// create array that contains no element   (let  evenValueArray = [];)
//    for loop
//    - iterate starting from 0 to increment  by two  to get even index only
//          - check if the element  is even  using the % element % 2 == 0
//                   - push  on the new array

// -  return  evenValueArray;

let getOnlyEvensIndex = (array) => {
  if (
    !Array.isArray(array) ||
    !array.every((element) => Number.isFinite(element))
  ) {
    return "please provide the valid array with Integer value ";
  } else {
    let evenValueArray = [];
    for (let i = 0; i < array.length; i += 2) {
      if (array[i] % 2 === 0) {
        evenValueArray.push(array[i]);
      }
    }
    return evenValueArray;
  }
};

console.log(getOnlyEvensIndex([1, 2, 3, 6, 4, 8]));
console.log(getOnlyEvensIndex([0, 1, 2, 3, 4]));
console.log(getOnlyEvensIndex(["abebe "]));

function evenArray(arr) {
  const updateArray = arr.filter(
    (element, index) => element % 2 === 0 && index % 2 === 0,
  );

  return updateArray;
}

console.log(evenArray([0, 1, 2, 3, 4]));
// Question 2
/*● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32  */

function reverseCompare(num) {
  // using built Method :
  let str = num.toString();
  let swapped = str.split("").reverse().join("");
  // console.log(swapped);
  return str > swapped ? "Ok " : "Not Ok";

  // swapping method
  // console.log(str);
  // console.log(str.length);
  // let temp = str[0];
  // str[0] = str[1];
  // str[1] = temp;
  // console.log(str);
  //  another method
  // let str = num.toString();
  // let reverse = str[1] + str[0];
  // return str > reverse ? "Ok " : "Not Ok ";
}
console.log(reverseCompare(10));
// function reverse(num) {
//   let tenHouse = Math.floor(num / 10);
//   let oneHouse = num % 10;
//   if (oneHouse === 0) {
//     console.log("Not ok");
//     return;
//   }
//   let reversedNumber = oneHouse * 10 + tenHouse;
//   if (num > reversedNumber) {
//     console.log("Ok");
//   } else {
//     console.log("N0t Ok ");
//   }
// }

// Question 3
/*● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1  */

function factorial(num) {
  // check the validation If number is integer
  if (!Number.isInteger(num)) {
    return "please provide Integer number";
  }
  // Check if the number is Non-negative
  if (num < 0) {
    return "Please provide non-negative number";
  }

  return num == 0 ? 1 : num * factorial(num - 1); // Using the  Ternary Operator  (the short Hand form of If-else Statement)

  // if (num === 0) {
  //   // stopping point or base point
  //   return 1;
  // } else {
  //   return num * factorial(num - 1);
  // }
  // Using the for loop and custom function
  function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
      result = result * i;
    }

    return result;
  }

  //  Using the Array Built Method  reduce();

  // Array.from () static method of the built-IN array object
  // used to create a new real array from an iterable or array-like object.
  // Array.from("hell0") // ["h","e","l", "l" , "o"]
  // also used to create an array from a object that has a length Property \\ Array.from ({length: somevaraible})  an object that has property length value:5
  // create an array with 5 elements   [undefined , undefined , undefined, undefined , undefined]  with   length = 5
  // another parameter passed to the function is  callback function  arrow function
  // function (_, i ){    _ == this parameter isn't important
  //   return i + 1 ;   // to shift the index by one   by default js index starts from 0  ;
  //   }
  return Array.from({ length: num }, (_, i) => i + 1).reduce(
    (product, value) => product * value,
    1,
  );
}

console.log(factorial(5));

// Question 4 (Meera array)
/* ● A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6 */

function multArray(array) {
  let updateArray = [];
  for (let i = 0; i < array.length; i++) {
    updateArray.push(array[i] * 2);
    // console.log(updateArray)
  }
  return updateArray;
}

// function muArray(array) {
//  return  array.map(function (element) {
//     return element * 2;
//   });
// }

// let result = multArray([1, 2, 3]);
// console.log(result);

function meeraArrayChecker(arrayNumber) {
  if (
    !Array.isArray(arrayNumber) ||
    !arrayNumber.every((element) => Number.isFinite(element))
  ) {
    return "please provide the valid array number";
  }
  let doubleArrays = multArray(arrayNumber); //
  // let doubleArrays = arrayNumber[i] * 2;

  for (let i = 0; i < doubleArrays.length; i++) {
    // i < array.length
    let singleValueOfDoubleArray = doubleArrays[i];
    let foundDoubleNumber = false; //  this is called flag it used to reduce the number of iteration of the instruction for the algorithm effeciency not to check extra loop which is not useful

    // console.log("outer loop iteration ", iteration++);

    for (let j = 0; j < arrayNumber.length; j++) {
      // console.log("innner loop iteration ", iteration++);

      if (singleValueOfDoubleArray === arrayNumber[j]) {
        // doubleArray === arrayNumber[i]
        foundDoubleNumber = true;
        break;
      }
    }
    if (foundDoubleNumber) {
      console.log("I am NOT a Meera array");
      return;
    }
  }

  console.log("I am a Meera array");
}
meeraArrayChecker([10, 4, 0, 5]);
meeraArrayChecker([7, 4, 9]);
meeraArrayChecker([1, -6, 4, -3]);

// Using the Built-in  Array Object  Method   every()
//and includes ()
//every() returns true only if every callback execution returns true.
// const isMeera = array.every(...)  to store the final value of every either true or false

// includes () is suitable for the searching parts  to checks whether an array contains a particular value
// everty() to check  that all elements satisfy the Meera condition
//

function checkMeera(array) {
  const isMeera = array.every(function (n) {
    return !array.includes(n * 2);
  });
  // if (isMeera) {
  //   console.log("I am a  Meera array ");
  // } else {
  //   console.log("I am Not a Meera array");
  // }
  isMeera ? "I am a Meera array " : "I am Not Meera array";
}
checkMeera([7, 4, 9]);
checkMeera([10, 4, 0, 5]);
checkMeera([1, -6, 4, -3]);

// Question 5 (Dual array)
/*● Define a Dual array to be an array where every value occurs exactly twice. For example,
{1, 2, 1, 3, 3, 2} is a dual array.The following arrays are not Dual arrays {2, 5, 2, 5, 5} (5
occurs three times instead of two times) {3, 1, 1, 2, 2} (3 occurs once instead of two
times) Write a function named isDual that returns 1 if its array argument is a Dual array.
Otherwise it returns 0. */

function isDual(array) {
  if (
    !Array.isArray(array) ||
    !array.every((element) => Number.isFinite(element))
  ) {
    return "please provide the valid number array";
  }

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (count !== 2) {
      return 0;
    }
  }
  return 1;
}

console.log(isDual([1, 2, 1, 3, 3, 2]));
// Using the built-in Array Object Method

// FUNCTION isDual(array)

//     result = EVERY value in array:

//         occurrences = FILTER array
//                       keeping elements equal to value

//         count = length of occurrences

//         IF count is equal to 2:
//             RETURN TRUE
//         ELSE:
//             RETURN FALSE

//     IF result is TRUE:
//         RETURN 1
//     ELSE:
//         RETURN 0

// END FUNCTION

//But every() will stop as soon as the callback returns false
function isDual(array) {
  const result = array.every(function (value) {
    const occurrences = array.filter(function (element) {
      return element === value;
    });

    return occurrences.length === 2;
  });

  if (result) {
    return 1;
  } else {
    return 0;
  }
}

console.log(isDual([1, 2, 1, 3, 3, 2]));

// using reduce and every
// FUNCTION isDual(array)

//     frequency = REDUCE array:

//         IF current value already exists in frequency:
//             increase its count by 1
//         ELSE:
//             create the value with count 1

//         RETURN updated frequency

//     result = EVERY count in frequency:

//         RETURN count is equal to 2

//     IF result is TRUE:
//         RETURN 1
//     ELSE:
//         RETURN 0

// END FUNCTION

// function isDual(array) {
//   const frequency = array.reduce(function (count, value) {
//     if (count[value] === undefined) {
//       count[value] = 1;
//     } else {
//       count[value]++;
//     }

//     return count;
//   }, {});

//   const result = Object.values(frequency).every(function (count) {
//     return count === 2;
//   });

//   if (result) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// console.log(isDual([1, 2, 1, 3, 3, 2]));

// Question 6
/* ● Write a function that takes the number of seconds and returns the digital format clock
time as a string. Time should be counted from 00:00:00.
○ Examples: digitalClock(5025) as "01:23:45" 5025 seconds is 1 hour, 23 mins, 45
secs.
■ digitalClock(61201) as "17:00:01" No AM/PM. 24h format.
■ digitalClock(87000) as "00:10:00" It's 00:10 next day.   */

function digitalClock(seconds) {
  // to remove the complele days
  let secondsToday = seconds % 86400;
  const hour = Math.floor(secondsToday / 3600);
  // calculating the remaining seconds after hours
  let remaniningSecond = secondsToday % 3600;
  const minute = Math.floor(remaniningSecond / 60);
  let reminSecond = remaniningSecond % 60;

  return `"${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(reminSecond).padStart(2, "0")}"`;
  // padStart() is string method used when we want to add charater to the begginning (left side ) of the string until in reaches a specified length .

  // String.padSrart(targetlength, padString(the character that should be added ata the beginning . ))
  //   1 minute  = 60 seconds
  // 1 hour    = 60 × 60 = 3,600 seconds
  // 1 day     = 24 × 60 × 60 = 86,400 seconds(one complete day seconds)
  // 87000 - 864000  = 600 seconds
  //
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));
console.log(digitalClock(0));

// Javascript Built-in  Date Object
// used to work with dates and times.
//  as developer we use Date object
// User Registration date
// Login timpstamps
// order date , appointment scheduing , deadlines , age calulction

const todayNow = new Date();
console.log(todayNow);
// the data constrcutor stntax

// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

const timestamp = Date.now();

console.log(timestamp);

// getter and setter Method in Date to get information from the date and to update or change  the date infromation using the setteres method

// Getter Method  i.e   Getting information from Date after creating using const date =  new Date();
// works with computer local time
// getFullYear();      date.getFullYear();  // returns the year
// getMonth();         date.getMoth();      // return the month index  jan = 0 ....  december  - 11    stored in array
// getDate();         //  return days of month
// getDay();      // returns days of the week
// getHours();   // return hours in local time
// getMinutes();  // get the minutes
// getSeconds();
// getMilliseconds();
// getTime();  ///Returns the Date's time value in milliseconds since January 1, 1970 UTC

// getUTCFullYear();
// getUTCMonth();
// getUTCDate();
// getUTCDay();
// getUTCHours();
// getUTCMinutes();

// const date = new Date("2026-08-09");

// console.log(date.getFullYear());
// const date = new Date("2026-08-09");

// console.log(date.getFullYear());

// Setter Method
// to in js to change the date object

// setFullYear()
// setMonth()
// setDate()
// setDay()      ← does NOT exist
// setHours()
// setMinutes()
// setSeconds()
// setMilliseconds()
// setTime()

// ============================================================
// JAVASCRIPT DATE OBJECT — COMPLETE STUDY NOTES
// ============================================================

// ============================================================
// 1. CREATING DATE OBJECTS
// ============================================================

// ------------------------------------------------------------
// new Date()
// Purpose:
// Creates a Date object containing the current date and time.
//
// Syntax:
// new Date()
//
// Example:
// const now = new Date();
// console.log(now);
//
// Example output:
// Sun Aug 09 2026 23:30:00 GMT+0300
//
// Important:
// The exact output depends on the current date, time,
// computer, and time zone.
// ------------------------------------------------------------

// ------------------------------------------------------------
// new Date(dateString)
// Purpose:
// Creates a Date object from a date string.
//
// Syntax:
// new Date("YYYY-MM-DD")
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date);
//
// Recommended:
// Use an unambiguous ISO-style date format when possible.
// ------------------------------------------------------------

// ------------------------------------------------------------
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
//
// Purpose:
// Creates a Date object using individual date/time components.
//
// Syntax:
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
//
// Example:
// const date = new Date(2026, 7, 9, 15, 30, 45);
//
// This means:
// Year        = 2026
// Month       = 7 → August
// Day         = 9
// Hours       = 15
// Minutes     = 30
// Seconds     = 45
//
// IMPORTANT:
// JavaScript months are ZERO-BASED.
//
// 0  = January
// 1  = February
// 2  = March
// 3  = April
// 4  = May
// 5  = June
// 6  = July
// 7  = August
// 8  = September
// 9  = October
// 10 = November
// 11 = December
// ------------------------------------------------------------

// ============================================================
// 2. GETTING DATE INFORMATION
// ============================================================

// ------------------------------------------------------------
// getFullYear()
// Purpose:
// Returns the four-digit year.
//
// Syntax:
// date.getFullYear()
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date.getFullYear());
//
// Result:
// 2026
// ------------------------------------------------------------

// ------------------------------------------------------------
// getMonth()
// Purpose:
// Returns the month as a ZERO-BASED number.
//
// Syntax:
// date.getMonth()
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date.getMonth());
//
// Result:
// 7
//
// Remember:
// 0 = January
// 7 = August
// 11 = December
// ------------------------------------------------------------

// ------------------------------------------------------------
// getDate()
// Purpose:
// Returns the day of the month.
//
// Syntax:
// date.getDate()
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date.getDate());
//
// Result:
// 9
//
// IMPORTANT:
// getDate() = day of the MONTH
// ------------------------------------------------------------

// ------------------------------------------------------------
// getDay()
// Purpose:
// Returns the day of the WEEK.
//
// Syntax:
// date.getDay()
//
// Result values:
//
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date.getDay());
//
// If August 9 is Sunday:
// Result:
// 0
//
// IMPORTANT:
// getDay() is NOT the day of the month.
// getDay() = day of the WEEK
// ------------------------------------------------------------

// ------------------------------------------------------------
// getHours()
// Purpose:
// Returns the hour according to local time.
//
// Syntax:
// date.getHours()
//
// Example:
// const date = new Date();
// console.log(date.getHours());
//
// Possible result:
// 23
//
// Range:
// 0 - 23
// ------------------------------------------------------------

// ------------------------------------------------------------
// getMinutes()
// Purpose:
// Returns the minutes according to local time.
//
// Syntax:
// date.getMinutes()
//
// Example:
// console.log(date.getMinutes());
//
// Possible result:
// 30
//
// Range:
// 0 - 59
// ------------------------------------------------------------

// ------------------------------------------------------------
// getSeconds()
// Purpose:
// Returns the seconds.
//
// Syntax:
// date.getSeconds()
//
// Example:
// console.log(date.getSeconds());
//
// Possible result:
// 45
//
// Range:
// 0 - 59
// ------------------------------------------------------------

// ------------------------------------------------------------
// getMilliseconds()
// Purpose:
// Returns the milliseconds.
//
// Syntax:
// date.getMilliseconds()
//
// Example:
// console.log(date.getMilliseconds());
//
// Possible result:
// 250
//
// Range:
// 0 - 999
// ------------------------------------------------------------

// ------------------------------------------------------------
// getTime()
// Purpose:
// Returns the Date's timestamp.
//
// The timestamp is the number of milliseconds since:
// January 1, 1970 00:00:00 UTC
//
// Syntax:
// date.getTime()
//
// Example:
// const date = new Date("2026-08-09");
// console.log(date.getTime());
//
// Result:
// A large number representing the timestamp.
//
// VERY IMPORTANT:
// getTime() is useful for comparing dates and calculating
// differences between dates.
// ------------------------------------------------------------

// ============================================================
// 3. SETTING / MODIFYING DATE INFORMATION
// ============================================================

// ------------------------------------------------------------
// setFullYear()
// Purpose:
// Changes the year of a Date object.
//
// Syntax:
// date.setFullYear(year)
//
// Example:
// const date = new Date();
// date.setFullYear(2030);
//
// console.log(date);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setMonth()
// Purpose:
// Changes the month.
//
// Syntax:
// date.setMonth(monthIndex)
//
// Example:
// const date = new Date();
// date.setMonth(0);
//
// 0 = January
//
// Therefore:
// date.setMonth(0);
//
// changes the month to January.
// ------------------------------------------------------------

// ------------------------------------------------------------
// setDate()
// Purpose:
// Changes the day of the month.
//
// Syntax:
// date.setDate(day)
//
// Example:
// const date = new Date();
// date.setDate(25);
//
// Now the date is the 25th day of its month.
// ------------------------------------------------------------

// ------------------------------------------------------------
// setHours()
// Purpose:
// Changes the hour.
//
// Syntax:
// date.setHours(hours)
//
// Example:
// const date = new Date();
// date.setHours(15);
//
// Changes the hour to:
// 15:00
//
// Range normally used:
// 0 - 23
// ------------------------------------------------------------

// ------------------------------------------------------------
// setMinutes()
// Purpose:
// Changes the minutes.
//
// Syntax:
// date.setMinutes(minutes)
//
// Example:
// const date = new Date();
// date.setMinutes(30);
//
// Changes the minutes to:
// 30
// ------------------------------------------------------------

// ------------------------------------------------------------
// setSeconds()
// Purpose:
// Changes the seconds.
//
// Syntax:
// date.setSeconds(seconds)
//
// Example:
// const date = new Date();
// date.setSeconds(45);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setMilliseconds()
// Purpose:
// Changes the milliseconds.
//
// Syntax:
// date.setMilliseconds(milliseconds)
//
// Example:
// const date = new Date();
// date.setMilliseconds(500);
//
// Range:
// 0 - 999
// ------------------------------------------------------------

// ------------------------------------------------------------
// setTime()
// Purpose:
// Changes the entire Date object using a timestamp.
//
// Syntax:
// date.setTime(milliseconds)
//
// Example:
// const date = new Date();
//
// date.setTime(0);
//
// This represents:
// January 1, 1970 00:00:00 UTC
// ------------------------------------------------------------

// ============================================================
// 4. UTC GET METHODS
// ============================================================
//
// These methods are similar to the normal get methods,
// but they return values based on UTC instead of local time.
//

// ------------------------------------------------------------
// getUTCFullYear()
// Purpose:
// Gets the year according to UTC.
//
// Syntax:
// date.getUTCFullYear()
//
// Example:
// console.log(date.getUTCFullYear());
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCMonth()
// Purpose:
// Gets the UTC month.
//
// IMPORTANT:
// It is also ZERO-BASED.
//
// 0 = January
// 11 = December
//
// Syntax:
// date.getUTCMonth()
//
// Example:
// console.log(date.getUTCMonth());
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCDate()
// Purpose:
// Gets the day of the month according to UTC.
//
// Syntax:
// date.getUTCDate()
//
// Example:
// console.log(date.getUTCDate());
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCDay()
// Purpose:
// Gets the day of the week according to UTC.
//
// 0 = Sunday
// 1 = Monday
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
//
// Syntax:
// date.getUTCDay()
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCHours()
// Purpose:
// Gets the hour according to UTC.
//
// Syntax:
// date.getUTCHours()
//
// Example:
// console.log(date.getUTCHours());
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCMinutes()
// Purpose:
// Gets the minutes according to UTC.
//
// Syntax:
// date.getUTCMinutes()
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCSeconds()
// Purpose:
// Gets the seconds according to UTC.
//
// Syntax:
// date.getUTCSeconds()
// ------------------------------------------------------------

// ------------------------------------------------------------
// getUTCMilliseconds()
// Purpose:
// Gets milliseconds according to UTC.
//
// Syntax:
// date.getUTCMilliseconds()
// ------------------------------------------------------------

// ============================================================
// 5. UTC SET METHODS
// ============================================================

// ------------------------------------------------------------
// setUTCFullYear()
// Purpose:
// Changes the year according to UTC.
//
// Syntax:
// date.setUTCFullYear(year)
//
// Example:
// date.setUTCFullYear(2030);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCMonth()
// Purpose:
// Changes the month according to UTC.
//
// Syntax:
// date.setUTCMonth(monthIndex)
//
// Example:
// date.setUTCMonth(7);
//
// 7 = August
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCDate()
// Purpose:
// Changes the day of the month according to UTC.
//
// Syntax:
// date.setUTCDate(day)
//
// Example:
// date.setUTCDate(20);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCHours()
// Purpose:
// Changes the hour according to UTC.
//
// Syntax:
// date.setUTCHours(hours)
//
// Example:
// date.setUTCHours(18);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCMinutes()
// Purpose:
// Changes the minutes according to UTC.
//
// Syntax:
// date.setUTCMinutes(minutes)
//
// Example:
// date.setUTCMinutes(30);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCSeconds()
// Purpose:
// Changes the seconds according to UTC.
//
// Syntax:
// date.setUTCSeconds(seconds)
//
// Example:
// date.setUTCSeconds(45);
// ------------------------------------------------------------

// ------------------------------------------------------------
// setUTCMilliseconds()
// Purpose:
// Changes milliseconds according to UTC.
//
// Syntax:
// date.setUTCMilliseconds(milliseconds)
//
// Example:
// date.setUTCMilliseconds(500);
// ------------------------------------------------------------

// ============================================================
// 6. CONVERTING / FORMATTING DATES
// ============================================================

// ------------------------------------------------------------
// toISOString()
// Purpose:
// Converts a Date object into an ISO 8601 string in UTC.
//
// Syntax:
// date.toISOString()
//
// Example:
// const date = new Date();
//
// console.log(date.toISOString());
//
// Example result:
// 2026-08-09T20:30:00.000Z
//
// IMPORTANT:
// This is VERY commonly used when sending dates between
// frontend, backend, and databases.
//
// Z means UTC.
// ------------------------------------------------------------

// ------------------------------------------------------------
// toJSON()
// Purpose:
// Returns the Date as an ISO-format string.
//
// Syntax:
// date.toJSON()
//
// Example:
// const date = new Date();
// console.log(date.toJSON());
//
// Usually produces the same ISO-style representation as:
// date.toISOString()
// ------------------------------------------------------------

// ------------------------------------------------------------
// toString()
// Purpose:
// Converts the Date object into a human-readable string
// using the local time zone.
//
// Syntax:
// date.toString()
//
// Example:
// console.log(date.toString());
//
// Example output:
// Sun Aug 09 2026 23:30:00 GMT+0300 ...
// ------------------------------------------------------------

// ------------------------------------------------------------
// toDateString()
// Purpose:
// Returns only the date portion as a readable string.
//
// Syntax:
// date.toDateString()
//
// Example:
// console.log(date.toDateString());
//
// Example output:
// Sun Aug 09 2026
// ------------------------------------------------------------

// ------------------------------------------------------------
// toTimeString()
// Purpose:
// Returns only the local time portion.
//
// Syntax:
// date.toTimeString()
//
// Example:
// console.log(date.toTimeString());
//
// Example output:
// 23:30:00 GMT+0300 ...
// ------------------------------------------------------------

// ------------------------------------------------------------
// toUTCString()
// Purpose:
// Converts the Date to a UTC string.
//
// Syntax:
// date.toUTCString()
//
// Example:
// console.log(date.toUTCString());
//
// Example output:
// Sun, 09 Aug 2026 20:30:00 GMT
// ------------------------------------------------------------

// ------------------------------------------------------------
// toLocaleString()
// Purpose:
// Converts date AND time into a locale-sensitive string.
//
// Syntax:
// date.toLocaleString()
//
// Example:
// console.log(date.toLocaleString());
//
// The exact format depends on the user's locale.
// ------------------------------------------------------------

// ------------------------------------------------------------
// toLocaleDateString()
// Purpose:
// Converts only the date into a locale-sensitive string.
//
// Syntax:
// date.toLocaleDateString()
//
// Example:
// console.log(date.toLocaleDateString());
//
// Useful for displaying dates to users.
// ------------------------------------------------------------

// ------------------------------------------------------------
// toLocaleTimeString()
// Purpose:
// Converts only the time into a locale-sensitive string.
//
// Syntax:
// date.toLocaleTimeString()
//
// Example:
// console.log(date.toLocaleTimeString());
//
// Useful for displaying time to users.
// ------------------------------------------------------------

// ============================================================
// 7. STATIC DATE METHODS
// ============================================================
//
// Static methods are called using:
// Date.method()
//
// They are NOT called using:
// date.method()
//

// ------------------------------------------------------------
// Date.now()
// Purpose:
// Returns the current timestamp in milliseconds.
//
// Syntax:
// Date.now()
//
// Example:
// const timestamp = Date.now();
// console.log(timestamp);
//
// IMPORTANT:
// Date.now() returns a NUMBER,
// not a Date object.
//
// Date.now()
//     ↓
// timestamp number
// ------------------------------------------------------------

// ------------------------------------------------------------
// Date.parse()
// Purpose:
// Converts a date string into a timestamp.
//
// Syntax:
// Date.parse(dateString)
//
// Example:
// const timestamp = Date.parse("2026-08-09");
//
// console.log(timestamp);
//
// Result:
// A number representing milliseconds since the epoch.
//
// Concept:
// date string
//     ↓
// Date.parse()
//     ↓
// timestamp
// ------------------------------------------------------------

// ------------------------------------------------------------
// Date.UTC()
// Purpose:
// Creates a timestamp from UTC date/time components.
//
// Syntax:
// Date.UTC(
//     year,
//     monthIndex,
//     day,
//     hours,
//     minutes,
//     seconds,
//     milliseconds
// )
//
// Example:
// const timestamp = Date.UTC(2026, 7, 9);
//
// console.log(timestamp);
//
// IMPORTANT:
// The month is ZERO-BASED.
// 7 = August.
// ------------------------------------------------------------

// ============================================================
// 8. VALUE CONVERSION METHODS
// ============================================================

// ------------------------------------------------------------
// valueOf()
// Purpose:
// Returns the primitive numeric time value of the Date.
//
// Syntax:
// date.valueOf()
//
// Example:
// const date = new Date();
//
// console.log(date.valueOf());
//
// The result is equivalent to:
// date.getTime()
//
// Both give the timestamp in milliseconds.
// ------------------------------------------------------------

// ------------------------------------------------------------
// Symbol.toPrimitive
//
// Purpose:
// Controls how a Date object is converted to a primitive
// value when JavaScript needs to perform an operation.
//
// This is an advanced feature.
//
// Example concept:
//
// const date = new Date();
//
// JavaScript may convert the Date object into a string
// or numeric value depending on the operation.
//
// You normally do NOT need to call this method directly.
// ------------------------------------------------------------

// ============================================================
// 9. IMPORTANT PROPERTIES / CONCEPTS
// ============================================================

// ------------------------------------------------------------
// Date.prototype
//
// Purpose:
// Contains the methods that Date objects inherit.
//
// For example:
//
// const date = new Date();
//
// date.getFullYear();
//
// getFullYear() comes from Date.prototype.
//
// You normally do not need to modify Date.prototype.
// ------------------------------------------------------------

// ============================================================
// 10. METHODS YOU SHOULD KNOW FIRST
// ============================================================
//
// If you are a beginner, do NOT try to memorize everything
// at once.
//
// Learn these first:
//
// 1. new Date()
//    → Create current Date object
//
// 2. Date.now()
//    → Get current timestamp
//
// 3. getFullYear()
//    → Get year
//
// 4. getMonth()
//    → Get month index
//
// 5. getDate()
//    → Get day of month
//
// 6. getDay()
//    → Get day of week
//
// 7. getHours()
//    → Get hour
//
// 8. getMinutes()
//    → Get minutes
//
// 9. getSeconds()
//    → Get seconds
//
// 10. getTime()
//     → Get timestamp
//
// 11. setFullYear()
//     → Change year
//
// 12. setMonth()
//     → Change month
//
// 13. setDate()
//     → Change day
//
// 14. setHours()
//     → Change hour
//
// 15. toISOString()
//     → Convert to ISO UTC string
//
// 16. toLocaleDateString()
//     → Display date according to locale
//
// 17. toLocaleTimeString()
//     → Display time according to locale
//
// 18. toLocaleString()
//     → Display date + time according to locale
//
// 19. getUTC...()
//     → Get date/time components in UTC
//
// 20. setUTC...()
//     → Modify date/time components in UTC
// ------------------------------------------------------------

// ============================================================
// 11. MOST IMPORTANT DIFFERENCES TO REMEMBER
// ============================================================

// ------------------------------------------------------------
// getDate() vs getDay()
//
// getDate()
// → Day of the month
//
// Example:
// August 9
// getDate() → 9
//
//
//
// getDay()
// → Day of the week
//
// Sunday → 0
// Monday → 1
// Tuesday → 2
// Wednesday → 3
// Thursday → 4
// Friday → 5
// Saturday → 6
// ------------------------------------------------------------

// ------------------------------------------------------------
// getMonth() vs normal month numbering
//
// JavaScript:
//
// January  = 0
// February = 1
// March    = 2
// ...
// August   = 7
// December = 11
//
// This is one of the most common Date mistakes.
// ------------------------------------------------------------

// ------------------------------------------------------------
// new Date() vs Date.now()
//
// new Date()
// → Returns a Date object.
//
// Date.now()
// → Returns a number/timestamp.
//
// Example:
//
// const date = new Date();
// const timestamp = Date.now();
// ------------------------------------------------------------

// ------------------------------------------------------------
// Local methods vs UTC methods
//
// Local:
//
// date.getHours()
//
// → Gets hour according to local time.
//
//
//
// UTC:
//
// date.getUTCHours()
//
// → Gets hour according to UTC.
//
// This distinction is very important in full-stack
// applications because users can be in different time zones.
// ------------------------------------------------------------

// ------------------------------------------------------------
// getTime() vs toISOString()
//
// getTime()
//
// → Returns a NUMBER.
//
// Example:
// 1786300000000
//
//
// toISOString()
//
// → Returns a STRING.
//
// Example:
// "2026-08-09T20:30:00.000Z"
// ------------------------------------------------------------

// ============================================================
// 12. COMMON REAL-WORLD USE CASES
// ============================================================

// ------------------------------------------------------------
// USER REGISTRATION
//
// Store the date when a user created an account.
//
// Example concept:
//
// createdAt = new Date();
//
// The backend/database can store the timestamp.
// ------------------------------------------------------------

// ------------------------------------------------------------
// BLOG / POST CREATION
//
// Every post can have:
//
// createdAt
// updatedAt
//
// Example concept:
//
// post.createdAt = new Date();
//
// post.updatedAt = new Date();
// ------------------------------------------------------------

// ------------------------------------------------------------
// PASSWORD RESET
//
// You can store:
//
// passwordResetRequestedAt
//
// Then compare it with the current time to determine
// whether the reset link has expired.
// ------------------------------------------------------------

// ------------------------------------------------------------
// APPOINTMENTS
//
// Example:
//
// appointmentDate = new Date(...)
//
// Then compare:
//
// appointmentDate.getTime()
//
// with:
//
// Date.now()
//
// to determine whether the appointment is in the
// past or future.
// ------------------------------------------------------------

// ------------------------------------------------------------
// COUNTDOWN / DEADLINE
//
// Example:
//
// deadline = new Date(...)
//
// remainingTime:
//
// deadline.getTime() - Date.now()
//
// The result is milliseconds remaining.
// ------------------------------------------------------------

// ------------------------------------------------------------
// DATABASE TIMESTAMPS
//
// A common approach is to represent timestamps using
// UTC / ISO format.
//
// Example:
//
// date.toISOString()
//
// Result:
//
// "2026-08-09T20:30:00.000Z"
// ------------------------------------------------------------

// ============================================================
// 13. THE MAIN DATE WORKFLOW TO REMEMBER
// ============================================================
//
//                     CREATE
//                       ↓
//                  new Date()
//                       ↓
//              ┌────────┴────────┐
//              ↓                 ↓
//             GET              SET
//              ↓                 ↓
//       getFullYear()      setFullYear()
//       getMonth()         setMonth()
//       getDate()          setDate()
//       getHours()         setHours()
//       getMinutes()        setMinutes()
//              │                 │
//              └────────┬────────┘
//                       ↓
//                    FORMAT
//                       ↓
//              toISOString()
//              toLocaleString()
//              toDateString()
//              toTimeString()
//                       ↓
//                    COMPARE
//                       ↓
//                   getTime()
//                       ↓
//                 timestamp
//
//
// ============================================================
// END OF DATE OBJECT NOTES
// ============================================================

console.log(typeof todayNow);
//             SAME MOMENT
//                 |
//       ┌─────────┴─────────┐
//       ↓                   ↓
//  Local time              UTC
//       ↓                   ↓
// Your time zone       Universal reference   Ethiopia uses UTC + 3

// get mean Read INformation
// set mean change information update
// get   retireve
// set    modify

//                  Date Object
//                 |
//    ┌────────────┼────────────┐
//    ↓            ↓            ↓
//  Date          Time        Timestamp
//    |            |            |
//  year          hour        milliseconds
//  month         minute
//  day            second
