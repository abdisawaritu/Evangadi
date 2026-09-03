// ==========================================
// CALCULATOR STATE
// ==========================================

let currentInput = "0";

let firstNumber = null;

let operator = null;

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
// SELECT NUMBER BUTTONS
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
// NUMBER BUTTON EVENTS
// ==========================================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const value = button.textContent;

    handleNumberInput(value);
  });
});

// ==========================================
// DECIMAL BUTTON
// ==========================================

decimalButton.addEventListener("click", function () {
  if (currentInput.includes(".")) {
    return;
  }

  currentInput = currentInput + ".";

  updateDisplay();

  console.log("Current input:", currentInput);
});

// ==========================================
// HANDLE ARITHMETIC OPERATOR
// ==========================================

function handleOperator(selectedOperator) {
  firstNumber = Number(currentInput);

  operator = selectedOperator;

  currentInput = "0";

  updateDisplay();

  console.log("First number:", firstNumber);

  console.log("Operator:", operator);

  console.log("Current input:", currentInput);
}

// ==========================================
// ADDITION
// ==========================================

addButton.addEventListener("click", function () {
  handleOperator("+");
});

// ==========================================
// SUBTRACTION
// ==========================================

subtractButton.addEventListener("click", function () {
  handleOperator("-");
});

// ==========================================
// MULTIPLICATION
// ==========================================

multiplyButton.addEventListener("click", function () {
  handleOperator("*");
});

// ==========================================
// DIVISION
// ==========================================

divideButton.addEventListener("click", function () {
  handleOperator("/");
});

// ==========================================
// CALCULATE RESULT
// ==========================================

function calculateResult() {
  if (firstNumber === null || operator === null) {
    return;
  }

  const secondNumber = Number(currentInput);

  let result;

  // Addition
  if (operator === "+") {
    result = firstNumber + secondNumber;
  }

  // Subtraction
  else if (operator === "-") {
    result = firstNumber - secondNumber;
  }

  // Multiplication
  else if (operator === "*") {
    result = firstNumber * secondNumber;
  }

  // Division
  else if (operator === "/") {
    if (secondNumber === 0) {
      currentInput = "Error";

      firstNumber = null;

      operator = null;

      updateDisplay();

      return;
    }

    result = firstNumber / secondNumber;
  }

  // Store the result
  currentInput = String(result);

  // Clear the previous operation
  firstNumber = null;

  operator = null;

  // Show result
  updateDisplay();

  console.log("Second number:", secondNumber);

  console.log("Result:", result);
}

// ==========================================
// EQUALS BUTTON
// ==========================================

equalsButton.addEventListener("click", function () {
  calculateResult();
});

// ==========================================
// OTHER BUTTONS
// ==========================================

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
