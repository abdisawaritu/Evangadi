let first = require("./myfirst");
let second = require("./mysecond");
console.log(first(5));
console.log(second(5));
let fs = require("fs");
let firstProduct = first(14);
fs.writeFileSync(
  "results.txt",
  `The value of 14 when passed through the myMultiplier
function is (${firstProduct}).\n`,
);

let SecondProduct = second(14);
fs.appendFileSync(
  "results.txt",
  `The value of 14 when passed through the myMultiplier
function is (${SecondProduct}).\n`,
);


