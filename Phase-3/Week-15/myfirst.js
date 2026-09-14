console.log("My First Module ");

function myMultiplier(num) {
  //   let product = num * 2;
  //   return product;
  return num * 2;
}
// console.log(myMultiplier(4));
const result = myMultiplier(4);
// console.log(result);

module.exports = myMultiplier;
