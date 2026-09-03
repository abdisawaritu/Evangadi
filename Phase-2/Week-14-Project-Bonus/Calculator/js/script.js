// ========================================
// CALCULATOR STATE
// ========================================

let currentValue = "";
let previousValue = "";
let currentOperator = null;

let shouldResetDisplay = false;

// New state for parentheses expressions
let expression = "";
let expressionMode = false;

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
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    if (expression === "") {
      display.textContent = "0";
    } else {
      display.textContent = expression;
    }

    return;
  }

  // ======================================
  // NORMAL CALCULATOR MODE
  // ======================================

  // First number + operator
  if (previousValue !== "" && currentOperator !== null && currentValue === "") {
    display.textContent = previousValue + " " + currentOperator;

    return;
  }

  // First number + operator + second number
  if (previousValue !== "" && currentOperator !== null && currentValue !== "") {
    display.textContent =
      previousValue + " " + currentOperator + " " + currentValue;

    return;
  }

  // Normal number
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
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    // If expression is empty, start with number
    if (expression === "") {
      expression = number;
    }

    // If expression ends with a closing parenthesis,
    // automatically add multiplication.
    else if (expression.endsWith(")")) {
      expression += "×" + number;
    }

    // Otherwise add number normally
    else {
      expression += number;
    }

    updateDisplay();

    return;
  }

  // ======================================
  // NORMAL MODE
  // ======================================

  // If Error is displayed,
  // start a new calculation.
  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
    shouldResetDisplay = false;
  }

  // If result was just calculated,
  // start a new calculation.
  if (shouldResetDisplay === true) {
    currentValue = "";
    previousValue = "";
    currentOperator = null;

    shouldResetDisplay = false;
  }

  // Prevent multiple zeros.
  if (currentValue === "0" && number === "0") {
    return;
  }

  // Replace initial zero.
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
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    // Find the last part of the expression.
    // This allows one decimal point per number.

    const parts = expression.split(/[+−×÷()]/);

    const lastPart = parts[parts.length - 1];

    // Do not allow another decimal point
    // in the current number.
    if (lastPart.includes(".")) {
      return;
    }

    // If expression is empty or the last
    // character is an operator/open parenthesis,
    // begin with 0.
    if (
      expression === "" ||
      expression.endsWith("+") ||
      expression.endsWith("−") ||
      expression.endsWith("×") ||
      expression.endsWith("÷") ||
      expression.endsWith("(")
    ) {
      expression += "0.";
    } else {
      expression += ".";
    }

    updateDisplay();

    return;
  }

  // ======================================
  // NORMAL MODE
  // ======================================

  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
  }

  if (shouldResetDisplay === true) {
    currentValue = "";
    previousValue = "";
    currentOperator = null;

    shouldResetDisplay = false;
  }

  // Prevent two decimal points.
  if (currentValue.includes(".")) {
    return;
  }

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
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    // Do not allow an operator immediately
    // after another operator.
    if (
      expression.endsWith("+") ||
      expression.endsWith("−") ||
      expression.endsWith("×") ||
      expression.endsWith("÷")
    ) {
      // Replace the previous operator.
      expression = expression.slice(0, -1) + operator;
    }

    // Do not put an operator immediately
    // after an opening parenthesis.
    else if (expression.endsWith("(")) {
      return;
    }

    // Otherwise add operator.
    else {
      expression += operator;
    }

    updateDisplay();

    return;
  }

  // ======================================
  // NORMAL MODE
  // ======================================

  if (currentValue === "Error") {
    currentValue = "";
    previousValue = "";
    currentOperator = null;
    shouldResetDisplay = false;
  }

  // Cannot select operator without number.
  if (currentValue === "") {
    return;
  }

  // If a complete operation already exists,
  // calculate it before selecting another operator.
  if (previousValue !== "" && currentOperator !== null && currentValue !== "") {
    calculateResult();
  }

  previousValue = currentValue;

  currentOperator = operator;

  // Empty means the second number
  // has not been entered yet.
  currentValue = "";

  shouldResetDisplay = false;

  updateDisplay();
}

// ========================================
// PARENTHESES
// ========================================

function handleParentheses() {
  // ======================================
  // START EXPRESSION MODE
  // ======================================

  if (expressionMode === false) {
    expressionMode = true;

    // If we already have a current number,
    // use it as the beginning of the expression.
    if (currentValue !== "") {
      expression = currentValue;
    }

    // If we have a previous calculation state,
    // combine it into the expression.
    else if (previousValue !== "" && currentOperator !== null) {
      expression = previousValue + currentOperator;
    } else {
      expression = "";
    }

    // Clear the old state because the expression
    // is now controlled by the expression variable.
    currentValue = "";
    previousValue = "";
    currentOperator = null;

    shouldResetDisplay = false;
  }

  // ======================================
  // DECIDE WHICH PARENTHESIS TO ADD
  // ======================================

  // If expression is empty,
  // the first parenthesis must be "(".
  if (expression === "") {
    expression += "(";

    updateDisplay();

    return;
  }

  // Get the last character.
  const lastCharacter = expression.charAt(expression.length - 1);

  // If the last character is an operator
  // or an opening parenthesis, add "(".
  if (
    lastCharacter === "+" ||
    lastCharacter === "−" ||
    lastCharacter === "×" ||
    lastCharacter === "÷" ||
    lastCharacter === "("
  ) {
    expression += "(";
  }

  // Otherwise add ")".
  else {
    expression += ")";
  }

  updateDisplay();
}

// ========================================
// CALCULATE RESULT
// ========================================

function calculateResult() {
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    // Cannot calculate an empty expression.
    if (expression === "") {
      return;
    }

    // Check that parentheses are balanced.
    let openParentheses = 0;

    let closeParentheses = 0;

    for (let i = 0; i < expression.length; i++) {
      if (expression[i] === "(") {
        openParentheses++;
      }

      if (expression[i] === ")") {
        closeParentheses++;
      }
    }

    if (openParentheses !== closeParentheses) {
      showError();

      return;
    }

    // Expression cannot end with an operator.
    const lastCharacter = expression.charAt(expression.length - 1);

    if (
      lastCharacter === "+" ||
      lastCharacter === "−" ||
      lastCharacter === "×" ||
      lastCharacter === "÷" ||
      lastCharacter === "("
    ) {
      showError();

      return;
    }

    // Convert calculator symbols to JavaScript operators.
    const calculationExpression = expression
      .replaceAll("×", "*")
      .replaceAll("÷", "/")
      .replaceAll("−", "-");

    let result;

    try {
      /*
       * The expression is generated only from
       * calculator buttons, so the calculator
       * controls what can be evaluated.
       */

      result = Function("return " + calculationExpression)();
    } catch (error) {
      showError();

      return;
    }

    // Prevent invalid results.
    if (!Number.isFinite(result)) {
      showError();

      return;
    }

    // Show result.
    currentValue = String(result);

    previousValue = "";

    currentOperator = null;

    expression = "";

    expressionMode = false;

    shouldResetDisplay = true;

    updateDisplay();

    return;
  }

  // ======================================
  // NORMAL CALCULATOR MODE
  // ======================================

  if (previousValue === "" || currentOperator === null || currentValue === "") {
    return;
  }

  const firstNumber = Number(previousValue);

  const secondNumber = Number(currentValue);

  let result;

  // Addition
  if (currentOperator === "+") {
    result = firstNumber + secondNumber;
  }

  // Subtraction
  else if (currentOperator === "−") {
    result = firstNumber - secondNumber;
  }

  // Multiplication
  else if (currentOperator === "×") {
    result = firstNumber * secondNumber;
  }

  // Division
  else if (currentOperator === "÷") {
    if (secondNumber === 0) {
      showError();

      return;
    }

    result = firstNumber / secondNumber;
  }

  // Safety check
  if (!Number.isFinite(result)) {
    showError();

    return;
  }

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

  expression = "";

  expressionMode = false;

  updateDisplay();
}

// ========================================
// BACKSPACE
// ========================================

function handleBackspace() {
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    if (expression === "") {
      return;
    }

    // Remove the last character.
    expression = expression.slice(0, -1);

    updateDisplay();

    return;
  }

  // ======================================
  // ERROR
  // ======================================

  if (currentValue === "Error") {
    clearCalculator();

    return;
  }

  // ======================================
  // CURRENT NUMBER
  // ======================================

  if (currentValue !== "") {
    currentValue = currentValue.slice(0, -1);

    updateDisplay();

    return;
  }

  // ======================================
  // OPERATOR
  // ======================================

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

  expression = "";

  expressionMode = false;

  shouldResetDisplay = false;

  updateDisplay();
}

// ========================================
// PERCENT
// ========================================

function handlePercent() {
  // ======================================
  // EXPRESSION MODE
  // ======================================

  if (expressionMode === true) {
    // Get the current number at the end
    // of the expression.
    const parts = expression.split(/[+−×÷()]/);

    const lastPart = parts[parts.length - 1];

    if (lastPart === "") {
      return;
    }

    const number = Number(lastPart);

    if (!Number.isFinite(number)) {
      return;
    }

    /*
     * Percentage behavior inside an expression:
     *
     * Addition:
     * 100 + 10% = 110
     * 10% means 10 percent of 100.
     *
     * Subtraction:
     * 100 - 10% = 90
     * 10% means 10 percent of 100.
     *
     * Multiplication:
     * 100 × 10% = 10
     * 10% becomes 0.10.
     *
     * Division:
     * 100 ÷ 10% = 1000
     * 10% becomes 0.10.
     */

    const expressionBeforeNumber = expression.slice(
      0,
      expression.length - lastPart.length,
    );

    const previousCharacter = expressionBeforeNumber.charAt(
      expressionBeforeNumber.length - 1,
    );

    let percentValue;

    // ======================================
    // ADDITION
    // ======================================

    if (previousCharacter === "+") {
      const previousParts = expressionBeforeNumber
        .slice(0, -1)
        .split(/[+−×÷()]/);

      const previousNumber = Number(previousParts[previousParts.length - 1]);

      if (!Number.isFinite(previousNumber)) {
        return;
      }

      percentValue = previousNumber * (number / 100);
    }

    // ======================================
    // SUBTRACTION
    // ======================================
    else if (previousCharacter === "−") {
      const previousParts = expressionBeforeNumber
        .slice(0, -1)
        .split(/[+−×÷()]/);

      const previousNumber = Number(previousParts[previousParts.length - 1]);

      if (!Number.isFinite(previousNumber)) {
        return;
      }

      percentValue = previousNumber * (number / 100);
    }

    // ======================================
    // MULTIPLICATION
    // ======================================
    else if (previousCharacter === "×") {
      percentValue = number / 100;
    }

    // ======================================
    // DIVISION
    // ======================================
    else if (previousCharacter === "÷") {
      percentValue = number / 100;
    }

    // ======================================
    // NO OPERATOR
    // ======================================
    else {
      percentValue = number / 100;
    }

    expression =
      expression.slice(0, expression.length - lastPart.length) + percentValue;

    updateDisplay();

    return;
  }

  // ======================================
  // NORMAL MODE
  // ======================================

  if (currentValue === "") {
    return;
  }

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
// NUMBER BUTTON EVENTS
// ========================================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
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
// MULTIPLICATION
// ========================================

if (multiplyButton) {
  multiplyButton.addEventListener("click", function () {
    handleOperator("×");
  });
}

// ========================================
// DIVISION
// ========================================

if (divideButton) {
  divideButton.addEventListener("click", function () {
    handleOperator("÷");
  });
}

// ========================================
// SUBTRACTION
// ========================================

if (subtractButton) {
  subtractButton.addEventListener("click", function () {
    handleOperator("−");
  });
}

// ========================================
// ADDITION
// ========================================

if (addButton) {
  addButton.addEventListener("click", function () {
    handleOperator("+");
  });
}

// ========================================
// EQUALS
// ========================================

if (equalsButton) {
  equalsButton.addEventListener("click", calculateResult);
}

// ========================================
// CLEAR
// ========================================

if (clearButton) {
  clearButton.addEventListener("click", clearCalculator);
}

// ========================================
// BACKSPACE
// ========================================

if (backspaceButton) {
  backspaceButton.addEventListener("click", handleBackspace);
}

// ========================================
// PERCENT
// ========================================

if (percentButton) {
  percentButton.addEventListener("click", handlePercent);
}

// ========================================
// PARENTHESES
// ========================================

if (parenthesesButton) {
  parenthesesButton.addEventListener("click", handleParentheses);
}

// ========================================
// INITIAL DISPLAY
// ========================================

updateDisplay();
