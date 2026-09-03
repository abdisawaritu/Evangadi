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
// NUMBER BUTTONS
// ==========================================

const numberButtons = document.querySelectorAll(".number-button");

// ==========================================
// UPDATE DISPLAY
// ==========================================

function updateDisplay() {
  if (firstNumber !== null && operator !== null) {
    display.textContent =
      String(firstNumber) +
      " " +
      getDisplayOperator(operator) +
      " " +
      currentInput;
  } else {
    display.textContent = currentInput;
  }
}

// ==========================================
// CONVERT JAVASCRIPT OPERATOR
// TO CALCULATOR DISPLAY OPERATOR
// ==========================================

function getDisplayOperator(operator) {
  if (operator === "*") {
    return "×";
  }

  if (operator === "/") {
    return "÷";
  }

  return operator;
}

// ==========================================
// HANDLE NUMBER INPUT
// ==========================================

function handleNumberInput(value) {
  // If we are entering the second number,
  // currentInput starts from 0.
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
});

// ==========================================
// HANDLE ARITHMETIC OPERATOR
// ==========================================

function handleOperator(selectedOperator) {
  // Save the number currently on the display
  // as the first number.
  firstNumber = Number(currentInput);

  // Save the selected operator.
  operator = selectedOperator;

  // Prepare the input for the second number.
  currentInput = "0";

  // IMPORTANT:
  // updateDisplay() now shows:
  //
  // firstNumber + operator + currentInput
  //
  // instead of showing only 0.
  updateDisplay();
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
  // Do nothing if an operation has not
  // been selected yet.
  if (firstNumber === null || operator === null) {
    return;
  }

  // currentInput is the second number.
  const secondNumber = Number(currentInput);

  let result;

  // ----------------------------------------
  // ADDITION
  // ----------------------------------------

  if (operator === "+") {
    result = firstNumber + secondNumber;
  }

  // ----------------------------------------
  // SUBTRACTION
  // ----------------------------------------
  else if (operator === "-") {
    result = firstNumber - secondNumber;
  }

  // ----------------------------------------
  // MULTIPLICATION
  // ----------------------------------------
  else if (operator === "*") {
    result = firstNumber * secondNumber;
  }

  // ----------------------------------------
  // DIVISION
  // ----------------------------------------
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

  // ----------------------------------------
  // SAVE RESULT
  // ----------------------------------------

  currentInput = String(result);

  // The previous operation is finished.
  firstNumber = null;

  operator = null;

  // Display the result.
  updateDisplay();
}

// ==========================================
// EQUALS BUTTON
// ==========================================

equalsButton.addEventListener("click", function () {
  calculateResult();
});

// ==========================================
// CLEAR BUTTON
// ==========================================

clearButton.addEventListener("click", function () {
  currentInput = "0";

  firstNumber = null;

  operator = null;

  updateDisplay();
});

// ==========================================
// BACKSPACE BUTTON
// ==========================================

backspaceButton.addEventListener("click", function () {
  if (currentInput === "Error") {
    currentInput = "0";
  } else if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }

  updateDisplay();
});

// ==========================================
// PARENTHESES BUTTON
// ==========================================

parenthesesButton.addEventListener("click", function () {
  console.log("Parentheses will be implemented later.");
});

// ==========================================
// PERCENT BUTTON
// ==========================================

percentButton.addEventListener("click", function () {
  console.log("Percentage will be implemented later.");
});

// ==========================================
// INITIAL DISPLAY
// ==========================================

updateDisplay();
