// ==========================================
// CALCULATOR STATE
// ==========================================

let currentInput = "0";

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
// UPDATE DISPLAY
// ==========================================

function updateDisplay() {
  display.textContent = currentInput;
}

// ==========================================
// HANDLE NUMBER INPUT
// ==========================================

function handleNumberInput(value) {
  // If the current input is 0,
  // replace it with the clicked value.
  if (currentInput === "0") {
    if (value === "00") {
      currentInput = "0";
    } else {
      currentInput = value;
    }
  } else {
    currentInput = currentInput + value;
  }

  updateDisplay();

  console.log("Current input:", currentInput);
}

// ==========================================
// NUMBER BUTTON CLICK EVENTS
// ==========================================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    handleNumberInput(value);
  });
});

// ==========================================
// DECIMAL INPUT
// ==========================================

decimalButton.addEventListener("click", function () {
  // Do not allow another decimal point
  // if the current number already contains one.
  if (currentInput.includes(".")) {
    return;
  }

  currentInput = currentInput + ".";

  updateDisplay();

  console.log("Current input:", currentInput);
});

// ==========================================
// OTHER BUTTONS
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

backspaceButton.addEventListener("click", function () {
  console.log("Backspace button clicked");
});

// ==========================================
// INITIAL DISPLAY
// ==========================================

updateDisplay();
