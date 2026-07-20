// alert(" your js file is connected");

// Introduction to programming basics - pratice exercise  homework
console.log(24 > 3); //  true
// since both are  the same data types js just compare the values

console.log(2 > "12"); // false
// the string 12 is automatically converted to the number 12 then js compare the two number  2 and 12

console.log(0 == 2); // false
// the loose equlaity just compare the values only
console.log(2.0 == 2); //  true
// the loose equlaity just compare the values only
console.log(2.0 == "2"); // true
// the loose equlaity just compare the values only
console.log(2 < "John"); // false
// because  the the string john is not converted to number and is NaN
console.log(2 > "John"); // false
// because  the the string john is not converted to number and is NaN
console.log("2" < "2"); //false
// because the ASCI code for the both of the string is the same and equal
console.log("2" > "12"); // true
// because js compare the values in inside the string character by character by convering the values into equivalent ASCII CODE

console.log(1 == 1 || 3 == 2 || 3 == 7); // true
// during the or  if js get one values  true it does not check  others is answer going to to be true
console.log(1 == 1 && 2 == 2 && 3 == 7); // false
// during the and   if js get one values  false it does not check  others its always false
console.log(1 == 1 || (2 == 2 && 3 == 7)); //true  the same reason applies to this also
console.log(
  (1 == true && 0 > true) ||
    "31" > "9" ||
    10 > 5 ||
    !("2" == "two" || 1 == "1"), // true   the same reason applies to this also as above
);

//homework question two
//  1. Which expression returns true?
// A/ ‘1’ === 1
// B/ 1 == 1
// C/ 1 === 1
// D/ B and C from above    this is the correct answer

// 2. What is the value of x in this statement?
// let x = (1 == true);
// A/ 1
// B/ true    this is the correct answer 
// C/ false
// D/ undefined

// 3. What is the value of y from the following statements?
// let x = 10;
// let y = (x > 5) && (x < 15)
// A/ 10
// B/ 5
// C/ 15
// D/ true   this is the correct answer 

// 4. What is the value of x from the following statements?
// let x = 5;
// x += 3;
// A/ 3
// B/ 8  this is the correct answer
// C/ 15
// D/ 5

// 5. What is the value of y from the following statements?
// let x = 10;
// let y = x++;
// A/ 10   this is the correct answer
// B/ 11
// C/ 12
// D/ 13
// 6. What is the value of y in the following statements?
// let x = 1;
// let y = (x !== 2);
// A/ 1
// B/ 2
// C/ false
// D/ true   this is the correct answer

// 7. What is the output of (+”2”+2)?   // 4
// 8. What is the output of (7 % 3)? // 1
// 9. What is the output of (2+true)? // 3






// homework question three
let numberOne = 1;
let numberTwo = 2;
let sum = num1 + num2;
console.log(sum);



//homework question four
let firstName = "abdisa";
let lastName = "waritu";
let fullName = firstName + " " + lastName;
console.log(fullName);

// rough paper
console.log(Number("john "));
