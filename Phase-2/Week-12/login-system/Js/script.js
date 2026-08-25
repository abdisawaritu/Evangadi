// =====================================================
// DOM SELECTION
// =====================================================

const loginForm = document.getElementById("loginForm");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");

const rememberMe = document.getElementById("rememberMe");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const formMessage = document.getElementById("formMessage");

const loginButton = document.getElementById("loginButton");

// =====================================================
// CLICK EVENT
// =====================================================

togglePassword.addEventListener("click", function () {
  console.log("Password toggle button clicked");
});

// =====================================================
// INPUT EVENT
// =====================================================

emailInput.addEventListener("input", function () {
  console.log("Email is being typed");
});

// =====================================================
// CHANGE EVENT
// =====================================================

rememberMe.addEventListener("change", function () {
  console.log("Remember me changed:", rememberMe.checked);
});

// =====================================================
// SUBMIT EVENT
// =====================================================

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Login form submitted");
});

// =====================================================
// BUTTON CLICK TEST
// =====================================================

loginButton.addEventListener("click", function () {
  console.log("Login button clicked");
});
