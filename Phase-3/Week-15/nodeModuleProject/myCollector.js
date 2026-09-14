const myFirstMultipler = require("./myFirst");
const mySecondMultiper = require("./mySecond");

console.log(myFirstMultipler(5));
console.log(mySecondMultiper(5));
// console.log(myFirstMultipler)
// console.log(mySecondMultiper)

const firstResult = myFirstMultipler(14);
const secondResult = mySecondMultiper(14);
// console.log(firstResult, secondResult);


// Question 3 

const fs = require("fs");
fs.writeFileSync(
  "results.txt",
  `The value of 14  when passed through the myMultipler function is ( ${firstResult})\n`,
);
// Question 4 

fs.appendFileSync(
  "results.txt",
  `The value of 14  when passed through the myMultipler function is ( ${secondResult})`,
);

// Question number 4
// const firstResult = myFirstMultipler(14);
// const secondResult = mySecondMultiper(14);

// const fs = require("fs");

// fs.writeFile(
//   "results.txt",
//   `The value of 14 when passed through the myMultiplier function is ( ${firstResult}).\n`,
//   (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }

//     fs.appendFile(
//       "results.txt",
//       `The value of 14 when passed through the myMultiplier function is ( ${secondResult}).`,
//       (err) => {
//         if (err) {
//           console.log(err);
//           return;
//         }

//         console.log("Both results were written successfully.");
//       },
//     );
//   },
// );

 
