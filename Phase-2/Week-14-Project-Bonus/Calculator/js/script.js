// ===============================
// Calculator State
// ===============================

let currentInput = "";
let expression = "";
let justCalculated = false;

// ===============================
// DOM Elements
// ===============================

const display = document.getElementById("display");

const numberButtons = document.querySelectorAll(".number-button");

const addButton = document.getElementById("addButton");
const subtractButton = document.getElementById("subtractButton");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton");

const equalsButton = document.getElementById("equalsButton");

const clearButton = document.getElementById("clearButton");

const backspaceButton = document.getElementById("backspaceButton");

const decimalButton = document.getElementById("decimalButton");

const percentButton = document.getElementById("percentButton");

const parenthesesButton = document.getElementById("parenthesesButton");

// ===============================
// Display
// ===============================

function updateDisplay(value) {
  display.textContent = value;
}

// ===============================
// Number Input
// ===============================

function handleNumber(number) {
  // If a result was just calculated,
  // starting a number begins a new calculation.
  if (justCalculated) {
    expression = "";
    currentInput = "";
    justCalculated = false;
  }

  currentInput += number;

  expression += number;

  updateDisplay(expression);
}

// ===============================
// Decimal Input
// ===============================

function handleDecimal() {
  if (justCalculated) {
    expression = "";
    currentInput = "";
    justCalculated = false;
  }

  // Do not allow more than one decimal
  // in the current number.
  if (currentInput.includes(".")) {
    return;
  }

  // If decimal is the first input,
  // make it 0.
  if (currentInput === "") {
    currentInput = "0";
    expression += "0";
  }

  currentInput += ".";

  expression += ".";

  updateDisplay(expression);
}

// ===============================
// Operator Input
// ===============================

function handleOperator(operator) {
  if (expression === "") {
    return;
  }

  // Do not allow two operators consecutively.
  const lastCharacter = expression.charAt(expression.length - 1);

  if (
    lastCharacter === "+" ||
    lastCharacter === "-" ||
    lastCharacter === "×" ||
    lastCharacter === "÷"
  ) {
    expression = expression.slice(0, -1) + operator;

    updateDisplay(expression);

    return;
  }

  expression += operator;

  currentInput = "";

  justCalculated = false;

  updateDisplay(expression);
}

// ===============================
// Parentheses
// ===============================

function handleParentheses() {
  if (justCalculated) {
    expression = "";
    currentInput = "";
    justCalculated = false;
  }

  const lastCharacter = expression.charAt(expression.length - 1);

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

  // If nothing has been entered,
  // insert an opening parenthesis.
  if (expression === "") {
    expression = "(";
    currentInput = "";

    updateDisplay(expression);

    return;
  }

  // If the previous character is an operator
  // or an opening parenthesis, insert "(".
  if (
    lastCharacter === "+" ||
    lastCharacter === "-" ||
    lastCharacter === "×" ||
    lastCharacter === "÷" ||
    lastCharacter === "("
  ) {
    expression += "(";
    currentInput = "";

    updateDisplay(expression);

    return;
  }

  // If there are more opening parentheses than
  // closing parentheses, close the expression.
  if (openParentheses > closeParentheses) {
    expression += ")";

    currentInput = "";

    updateDisplay(expression);

    return;
  }

  // Otherwise start a new group.
  expression += " (";

  currentInput = "";

  updateDisplay(expression);
}

// ===============================
// Percentage Logic
// ===============================

function handlePercent() {
  if (expression === "") {
    return;
  }

  // The last part must be a number.
  const match = expression.match(/(\d+\.?\d*)$/);

  if (!match) {
    return;
  }

  const number = match[1];

  // Find the number before the current number.
  const beforeCurrentNumber = expression.slice(
    0,
    expression.length - number.length,
  );

  const lastOperator = beforeCurrentNumber.charAt(
    beforeCurrentNumber.length - 1,
  );

  /*
    IMPORTANT:

    + and -

    100 + 10%
    
    means:

    10% of 100

    = 10

    Therefore:

    100 + 10 = 110
  */

  if (lastOperator === "+" || lastOperator === "-") {
    const expressionWithoutCurrentNumber = beforeCurrentNumber.slice(0, -1);

    const firstNumberMatch =
      expressionWithoutCurrentNumber.match(/(\d+\.?\d*)$/);

    if (firstNumberMatch) {
      const firstNumber = Number(firstNumberMatch[1]);

      const percentageNumber = Number(number);

      const percentageValue = (firstNumber * percentageNumber) / 100;

      expression =
        expressionWithoutCurrentNumber + lastOperator + percentageValue;

      currentInput = String(percentageValue);

      updateDisplay(expression);

      return;
    }
  }

  /*
    × and ÷

    100 × 10%

    means:

    100 × 0.10

    10% = 10 / 100 = 0.10
  */

  if (lastOperator === "×" || lastOperator === "÷") {
    const percentageValue = Number(number) / 100;

    expression = beforeCurrentNumber + percentageValue;

    currentInput = String(percentageValue);

    updateDisplay(expression);

    return;
  }

  /*
    If there is no operator, the percentage
    behaves normally.

    Example:

    50%

    becomes:

    0.5
  */

  const percentageValue = Number(number) / 100;

  expression = beforeCurrentNumber + percentageValue;

  currentInput = String(percentageValue);

  updateDisplay(expression);
}

// ===============================
// Percentage Preparation
// ===============================

function prepareExpressionForCalculation(value) {
  /*
    At this point percentage values have already
    been converted by handlePercent().

    Therefore the expression can be evaluated normally.
  */

  return value;
}

// ===============================
// Calculate Expression
// ===============================

function calculateExpression() {
  if (expression === "") {
    return;
  }

  try {
    let calculationExpression = prepareExpressionForCalculation(expression);

    /*
      Convert calculator symbols into JavaScript
      mathematical operators.
    */

    calculationExpression = calculationExpression.replace(/×/g, "*");

    calculationExpression = calculationExpression.replace(/÷/g, "/");

    /*
      Check that parentheses are balanced.
    */

    let openParentheses = 0;
    let closeParentheses = 0;

    for (let i = 0; i < calculationExpression.length; i++) {
      if (calculationExpression[i] === "(") {
        openParentheses++;
      }

      if (calculationExpression[i] === ")") {
        closeParentheses++;
      }
    }

    if (openParentheses !== closeParentheses) {
      throw new Error("Invalid parentheses");
    }

    /*
      Calculate the expression.
    */

    const result = Function(
      `"use strict"; return (${calculationExpression})`,
    )();

    if (!Number.isFinite(result)) {
      throw new Error("Invalid calculation");
    }

    /*
      Remove unnecessary decimal zeros.
    */

    const formattedResult = Number(result.toFixed(10));

    expression = String(formattedResult);

    currentInput = String(formattedResult);

    justCalculated = true;

    updateDisplay(expression);
  } catch (error) {
    expression = "";
    currentInput = "";

    justCalculated = false;

    updateDisplay("Error");
  }
}

// ===============================
// Clear Button
// ===============================

function clearCalculator() {
  expression = "";

  currentInput = "";

  justCalculated = false;

  updateDisplay("0");
}

// ===============================
// Backspace Button
// ===============================

function handleBackspace() {
  if (justCalculated) {
    clearCalculator();

    return;
  }

  if (expression === "") {
    return;
  }

  /*
    Remove the last character.

    Example:

    123 + 45

    becomes:

    123 + 4
  */

  expression = expression.slice(0, -1);

  /*
    Rebuild currentInput from the end
    of the expression.
  */

  const numberMatch = expression.match(/(\d+\.?\d*)$/);

  if (numberMatch) {
    currentInput = numberMatch[1];
  } else {
    currentInput = "";
  }

  if (expression === "") {
    updateDisplay("0");
  } else {
    updateDisplay(expression);
  }
}

// ===============================
// Number Buttons
// ===============================

numberButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    handleNumber(button.textContent);
  });
});

// ===============================
// Operator Buttons
// ===============================

addButton.addEventListener("click", function () {
  handleOperator("+");
});

subtractButton.addEventListener("click", function () {
  handleOperator("-");
});

multiplyButton.addEventListener("click", function () {
  handleOperator("×");
});

divideButton.addEventListener("click", function () {
  handleOperator("÷");
});

// ===============================
// Decimal Button
// ===============================

decimalButton.addEventListener("click", function () {
  handleDecimal();
});

// ===============================
// Parentheses Button
// ===============================

parenthesesButton.addEventListener("click", function () {
  handleParentheses();
});

// ===============================
// Percentage Button
// ===============================

percentButton.addEventListener("click", function () {
  handlePercent();
});

// ===============================
// Equals Button
// ===============================

equalsButton.addEventListener("click", function () {
  calculateExpression();
});

// ===============================
// Clear Button
// ===============================

clearButton.addEventListener("click", function () {
  clearCalculator();
});

// ===============================
// Backspace Button
// ===============================

backspaceButton.addEventListener("click", function () {
  handleBackspace();
});

// ===============================
// Initial Display
// ===============================

updateDisplay("0");
