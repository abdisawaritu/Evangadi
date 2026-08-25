// =====================================================
// DOM SELECTION
// =====================================================

// Login form
const loginForm = document.getElementById("loginForm");

// Form inputs
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Password visibility button
const togglePassword = document.getElementById("togglePassword");

// Remember-me checkbox
const rememberMe = document.getElementById("rememberMe");

// Error message elements
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// General form message
const formMessage = document.getElementById("formMessage");

// Login button
const loginButton = document.getElementById("loginButton");

// =====================================================
// READING INPUT VALUES
// =====================================================

// Read email value
const emailValue = emailInput.value;

// Read password value
const passwordValue = passwordInput.value;

// Read checkbox state
const rememberMeValue = rememberMe.checked;

// =====================================================
// READING ELEMENT PROPERTIES
// =====================================================

// Read password input type
const passwordType = passwordInput.type;

// Read login button text
const loginButtonText = loginButton.textContent;

// Read password toggle button text
const toggleButtonText = togglePassword.textContent;

// =====================================================
// DISPLAY VALUES IN CONSOLE
// =====================================================

console.log("Email value:", emailValue);

console.log("Password value:", passwordValue);

console.log("Remember me checked:", rememberMeValue);

console.log("Password input type:", passwordType);

console.log("Login button text:", loginButtonText);

console.log("Toggle button text:", toggleButtonText);
