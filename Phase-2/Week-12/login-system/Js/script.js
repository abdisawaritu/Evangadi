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

// =====================================================
// SHOW / HIDE PASSWORD
// =====================================================

togglePassword.addEventListener("click", function () {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";

    togglePassword.textContent = "Hide";

    togglePassword.setAttribute("aria-label", "Hide password");
  } else {
    passwordInput.type = "password";

    togglePassword.textContent = "Show";

    togglePassword.setAttribute("aria-label", "Show password");
  }
});

// =====================================================
// EMAIL VALIDATION
// =====================================================

function validateEmail() {
  const email = emailInput.value.trim();

  // Clear previous error
  emailError.textContent = "";

  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");

  // Check empty email
  if (email === "") {
    emailError.textContent = "Email address is required.";

    emailInput.classList.add("is-invalid");

    return false;
  }

  // Email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";

    emailInput.classList.add("is-invalid");

    return false;
  }

  // Email is valid
  emailInput.classList.add("is-valid");

  return true;
}

// =====================================================
// PASSWORD VALIDATION
// =====================================================

function validatePassword() {
  const password = passwordInput.value;

  // Clear previous error
  passwordError.textContent = "";

  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");

  // Check empty password
  if (password === "") {
    passwordError.textContent = "Password is required.";

    passwordInput.classList.add("is-invalid");

    return false;
  }

  // Check password length
  if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters.";

    passwordInput.classList.add("is-invalid");

    return false;
  }

  // Password is valid
  passwordInput.classList.add("is-valid");

  return true;
}

// =====================================================
// EMAIL INPUT EVENT
// =====================================================

emailInput.addEventListener("input", function () {
  validateEmail();
});

// =====================================================
// PASSWORD INPUT EVENT
// =====================================================

passwordInput.addEventListener("input", function () {
  validatePassword();
});

// =====================================================
// FORM SUBMIT EVENT
// =====================================================

loginForm.addEventListener("submit", function (event) {
  // Stop browser's default validation/submission
  event.preventDefault();

  // Clear previous general message
  formMessage.textContent = "";

  formMessage.className = "form-message";

  // Validate email
  const isEmailValid = validateEmail();

  // Validate password
  const isPasswordValid = validatePassword();

  // Stop if any field is invalid
  if (!isEmailValid || !isPasswordValid) {
    formMessage.textContent = "Please correct the errors above.";

    formMessage.classList.add("text-danger");

    return;
  }

  // ===================================================
  // FORM IS VALID
  // ===================================================

  formMessage.textContent = "Form validation successful.";

  formMessage.classList.add("text-success");

  // Read values
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const remember = rememberMe.checked;

  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Remember me:", remember);
});
