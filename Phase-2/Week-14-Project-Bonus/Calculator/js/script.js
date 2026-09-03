// ========================================
// CALCULATOR STATE
// ========================================

let currentValue = "";
let previousValue = "";
let currentOperator = null;

let shouldResetDisplay = false;

// ========================================
// GET HTML ELEMENTS
// ========================================

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number-button");

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

// ========================================
// DISPLAY
// ========================================

function updateDisplay() {
  // If there is a complete calculation
  // being prepared, show first number + operator.
  if (previousValue !== "" && currentOperator !== null && currentValue === "") {
    display.textContent = previousValue + " " + currentOperator;

    return;
  }

  // If there is a first number,
  // an operator and a second number,
  // show the complete expression.
  if (previousValue !== "" && currentOperator !== null && currentValue !== "") {
    display.textContent =
      previousValue + " " + currentOperator + " " + currentValue;

    return;
  }

  // Normal display.
  if (currentValue === "") {
    display.textContent = "0";
  } else {
    display.textContent = currentValue;
  }
}

// ========================================
// NUMBER INPUT
// ========================================

function handleNumber(number) {
  // ----------------------------------------
  // If the calculator is showing Error,
  // start a completely new calculation.
  // ----------------------------------------

  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
    shouldResetDisplay = false;
  }

  // ----------------------------------------
  // If a result was just calculated,
  // pressing a number starts a new calculation.
  // ----------------------------------------

  if (shouldResetDisplay === true) {
    currentValue = "";
    previousValue = "";
    currentOperator = null;

    shouldResetDisplay = false;
  }

  // ----------------------------------------
  // Prevent 0000...
  // ----------------------------------------

  if (currentValue === "0" && number === "0") {
    return;
  }

  // ----------------------------------------
  // If current value is 0 and user enters
  // another number, replace the 0.
  // ----------------------------------------

  if (currentValue === "0" && number !== "0") {
    currentValue = number;
  } else {
    currentValue += number;
  }

  updateDisplay();
}

// ========================================
// DECIMAL
// ========================================

function handleDecimal() {
  // If Error is displayed, start fresh.
  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
  }

  // If result was already calculated,
  // start a new number.
  if (shouldResetDisplay === true) {
    currentValue = "";
    previousValue = "";
    currentOperator = null;

    shouldResetDisplay = false;
  }

  // Do not allow two decimal points.
  if (currentValue.includes(".")) {
    return;
  }

  // If user starts with decimal,
  // create 0.
  if (currentValue === "") {
    currentValue = "0.";
  } else {
    currentValue += ".";
  }

  updateDisplay();
}

// ========================================
// OPERATOR
// ========================================

function handleOperator(operator) {
  // ----------------------------------------
  // If Error is displayed,
  // reset the calculator.
  // ----------------------------------------

  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
    shouldResetDisplay = false;
  }

  // ----------------------------------------
  // Cannot select an operator
  // without a number.
  // ----------------------------------------

  if (currentValue === "") {
    return;
  }

  // ----------------------------------------
  // If there is already a complete operation,
  // calculate it before selecting another operator.
  // ----------------------------------------

  if (previousValue !== "" && currentOperator !== null && currentValue !== "") {
    calculateResult();
  }

  // ----------------------------------------
  // Save current number as previous number.
  // ----------------------------------------

  previousValue = currentValue;

  // ----------------------------------------
  // Save operator.
  // ----------------------------------------

  currentOperator = operator;

  // ----------------------------------------
  // Clear currentValue.
  //
  // IMPORTANT:
  // We use "" here, NOT "0".
  //
  // This means the second number has not
  // been entered yet.
  // ----------------------------------------

  currentValue = "";

  shouldResetDisplay = false;

  updateDisplay();
}

// ========================================
// CALCULATE RESULT
// ========================================

function calculateResult() {
  // ----------------------------------------
  // Make sure calculation has everything
  // it needs.
  // ----------------------------------------

  if (previousValue === "" || currentOperator === null || currentValue === "") {
    return;
  }

  const firstNumber = Number(previousValue);

  const secondNumber = Number(currentValue);

  let result;

  // ----------------------------------------
  // ADDITION
  // ----------------------------------------

  if (currentOperator === "+") {
    result = firstNumber + secondNumber;
  }

  // ----------------------------------------
  // SUBTRACTION
  // ----------------------------------------
  // IMPORTANT:
  // The HTML button uses the mathematical
  // minus character "−", not the normal
  // keyboard hyphen "-".
  // ----------------------------------------
  else if (currentOperator === "−") {
    result = firstNumber - secondNumber;
  }

  // ----------------------------------------
  // MULTIPLICATION
  // ----------------------------------------
  else if (currentOperator === "×") {
    result = firstNumber * secondNumber;
  }

  // ----------------------------------------
  // DIVISION
  // ----------------------------------------
  else if (currentOperator === "÷") {
    if (secondNumber === 0) {
      showError();

      return;
    }

    result = firstNumber / secondNumber;
  }

  // ----------------------------------------
  // SAFETY CHECK
  // ----------------------------------------

  if (!Number.isFinite(result)) {
    showError();

    return;
  }

  // ----------------------------------------
  // Show result
  // ----------------------------------------

  currentValue = String(result);

  previousValue = "";

  currentOperator = null;

  shouldResetDisplay = true;

  updateDisplay();
}

// ========================================
// CLEAR
// ========================================

function clearCalculator() {
  currentValue = "";

  previousValue = "";

  currentOperator = null;

  shouldResetDisplay = false;

  updateDisplay();
}

// ========================================
// BACKSPACE
// ========================================

function handleBackspace() {
  // ----------------------------------------
  // If Error is displayed,
  // clear the calculator.
  // ----------------------------------------

  if (currentValue === "Error") {
    clearCalculator();

    return;
  }

  // ----------------------------------------
  // If there is a current number,
  // remove its last character.
  // ----------------------------------------

  if (currentValue !== "") {
    currentValue = currentValue.slice(0, -1);

    updateDisplay();

    return;
  }

  // ----------------------------------------
  // If currentValue is empty but an operator
  // exists, remove the operator and restore
  // the previous number.
  // ----------------------------------------

  if (currentValue === "" && currentOperator !== null) {
    currentValue = previousValue;

    previousValue = "";

    currentOperator = null;

    shouldResetDisplay = false;

    updateDisplay();

    return;
  }
}

// ========================================
// ERROR
// ========================================

function showError() {
  currentValue = "Error";

  previousValue = "";

  currentOperator = null;

  shouldResetDisplay = false;

  updateDisplay();
}

// ========================================
// PERCENT
// ========================================

function handlePercent() {
  // Do nothing if there is no number.
  if (currentValue === "") {
    return;
  }

  // Do nothing if Error.
  if (currentValue === "Error") {
    return;
  }

  const number = Number(currentValue);

  if (!Number.isFinite(number)) {
    showError();

    return;
  }

  currentValue = String(number / 100);

  updateDisplay();
}

// ========================================
// PARENTHESES
// ========================================

function handleParentheses() {
  // Parentheses calculation is not yet
  // implemented in this calculator stage.
  //
  // We keep the button safely connected
  // so clicking it does not cause an error.

  if (currentValue === "Error") {
    clearCalculator();
  }
}

// ========================================
// NUMBER BUTTON EVENTS
// ========================================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // We get the value directly from the
    // button text instead of dataset.number.

    const number = button.textContent.trim();

    handleNumber(number);
  });
});

// ========================================
// DECIMAL BUTTON
// ========================================

if (decimalButton) {
  decimalButton.addEventListener("click", handleDecimal);
}

// ========================================
// OPERATOR BUTTON EVENTS
// ========================================

if (multiplyButton) {
  multiplyButton.addEventListener("click", function () {
    handleOperator("×");
  });
}

if (divideButton) {
  divideButton.addEventListener("click", function () {
    handleOperator("÷");
  });
}

if (subtractButton) {
  subtractButton.addEventListener("click", function () {
    handleOperator("−");
  });
}

if (addButton) {
  addButton.addEventListener("click", function () {
    handleOperator("+");
  });
}

// ========================================
// EQUAL BUTTON
// ========================================

if (equalsButton) {
  equalsButton.addEventListener("click", calculateResult);
}

// ========================================
// CLEAR BUTTON
// ========================================

if (clearButton) {
  clearButton.addEventListener("click", clearCalculator);
}

// ========================================
// BACKSPACE BUTTON
// ========================================

if (backspaceButton) {
  backspaceButton.addEventListener("click", handleBackspace);
}

// ========================================
// PERCENT BUTTON
// ========================================

if (percentButton) {
  percentButton.addEventListener("click", handlePercent);
}

// ========================================
// PARENTHESES BUTTON
// ========================================

if (parenthesesButton) {
  parenthesesButton.addEventListener("click", handleParentheses);
}

// ========================================
// INITIAL DISPLAY
// ========================================

updateDisplay();
