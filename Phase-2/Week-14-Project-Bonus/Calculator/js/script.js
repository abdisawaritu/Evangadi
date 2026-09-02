// ==========================================
// SELECT CALCULATOR DOM ELEMENTS
// ==========================================

const display = document.getElementById("display");

const clearButton = document.getElementById("clearButton");

const parenthesesButton = document.getElementById("parenthesesButton");

const percentButton = document.getElementById("percentButton");

const multiplyButton = document.getElementById("multiplyButton");

const divideButton = document.getElementById("divideButton");

const subtractButton = document.getElementById("subtractButton");

const addButton = document.getElementById("addButton");

const decimalButton = document.getElementById("decimalButton");

const equalsButton = document.getElementById("equalsButton");

const backspaceButton = document.getElementById("backspaceButton");

// ==========================================
// SELECT ALL NUMBER BUTTONS
// ==========================================

const numberButtons = document.querySelectorAll(".number-button");

// ==========================================
// NUMBER BUTTON CLICK
// ==========================================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    display.textContent = value;

    console.log("Number button clicked:", value);
  });
});

// ==========================================
// OPERATOR BUTTON CLICKS
// ==========================================

addButton.addEventListener("click", function () {
  console.log("Addition button clicked");
});

subtractButton.addEventListener("click", function () {
  console.log("Subtraction button clicked");
});

multiplyButton.addEventListener("click", function () {
  console.log("Multiplication button clicked");
});

divideButton.addEventListener("click", function () {
  console.log("Division button clicked");
});

equalsButton.addEventListener("click", function () {
  console.log("Equals button clicked");
});

clearButton.addEventListener("click", function () {
  console.log("Clear button clicked");
});

parenthesesButton.addEventListener("click", function () {
  console.log("Parentheses button clicked");
});

percentButton.addEventListener("click", function () {
  console.log("Percentage button clicked");
});

decimalButton.addEventListener("click", function () {
  console.log("Decimal button clicked");
});

backspaceButton.addEventListener("click", function () {
  console.log("Backspace button clicked");
});
