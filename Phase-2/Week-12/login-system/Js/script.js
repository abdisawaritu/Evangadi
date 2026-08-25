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
// SHOW / HIDE PASSWORD
// =====================================================

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    // Make password visible
    passwordInput.type = "text";

    // Change button text
    togglePassword.textContent = "Hide";
  } else {
    // Hide password again
    passwordInput.type = "password";

    // Change button text
    togglePassword.textContent = "Show";
  }
});

// =====================================================
// EMAIL INPUT EVENT
// =====================================================

emailInput.addEventListener("input", function () {
  console.log("Email:", emailInput.value);
});

// =====================================================
// REMEMBER ME EVENT
// =====================================================

rememberMe.addEventListener("change", function () {
  console.log("Remember me:", rememberMe.checked);
});

// =====================================================
// LOGIN FORM SUBMIT EVENT
// =====================================================

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log("Login form submitted");
});

// =====================================================
// LOGIN BUTTON CLICK
// =====================================================

loginButton.addEventListener("click", function () {
  console.log("Login button clicked");
});
