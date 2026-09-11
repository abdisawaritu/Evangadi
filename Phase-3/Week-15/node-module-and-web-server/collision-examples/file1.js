// Name space collision
// developer A

var x = () => {
  console.log("Developer A");
};
x();

varx = () => {
  console.log("Developer B");
};
x();

// the solution for the namespace collision

let first = {
  X() {
    console.log("Developer B");
  },
};

let second = {
  X() {
    console.log("developer A");
  },
};
// first.x();
second.X();

// wrapping the code inside the braces
eat = () => {
  console.log(" hana ate ");
};


// Immediately invoded  function  IIFE  immediatel invoked function  expression  solution 
// modularity  dividiging into different modules 
// commonJs and  ES6  modulariry Method . 




