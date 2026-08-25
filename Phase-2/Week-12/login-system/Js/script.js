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

  // Reset previous state

  emailInput.classList.remove("is-invalid", "is-valid");

  emailError.textContent = "";

  // Empty email

  if (email === "") {
    emailError.textContent = "Email address is required.";

    emailInput.classList.add("is-invalid");

    emailInput.setAttribute("aria-invalid", "true");

    return false;
  }

  // Email pattern

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";

    emailInput.classList.add("is-invalid");

    emailInput.setAttribute("aria-invalid", "true");

    return false;
  }

  // Valid email

  emailInput.classList.add("is-valid");

  emailInput.setAttribute("aria-invalid", "false");

  return true;
}

// =====================================================
// PASSWORD VALIDATION
// =====================================================

function validatePassword() {
  const password = passwordInput.value;

  // Reset previous state

  passwordInput.classList.remove("is-invalid", "is-valid");

  passwordError.textContent = "";

  // Empty password

  if (password === "") {
    passwordError.textContent = "Password is required.";

    passwordInput.classList.add("is-invalid");

    passwordInput.setAttribute("aria-invalid", "true");

    return false;
  }

  // Minimum length

  if (password.length < 8) {
    passwordError.textContent = "Password must contain at least 8 characters.";

    passwordInput.classList.add("is-invalid");

    passwordInput.setAttribute("aria-invalid", "true");

    return false;
  }

  // Valid password

  passwordInput.classList.add("is-valid");

  passwordInput.setAttribute("aria-invalid", "false");

  return true;
}

// =====================================================
// CLEAR GENERAL MESSAGE
// =====================================================

function clearFormMessage() {
  formMessage.textContent = "";

  formMessage.className = "form-message";
}

// =====================================================
// EMAIL INPUT EVENT
// =====================================================

emailInput.addEventListener("input", function () {
  clearFormMessage();

  validateEmail();
});

// =====================================================
// PASSWORD INPUT EVENT
// =====================================================

passwordInput.addEventListener("input", function () {
  clearFormMessage();

  validatePassword();
});

// =====================================================
// FORM SUBMIT
// =====================================================

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Clear previous general message

  clearFormMessage();

  // Validate fields

  const isEmailValid = validateEmail();

  const isPasswordValid = validatePassword();

  // Stop if invalid

  if (!isEmailValid || !isPasswordValid) {
    formMessage.textContent = "Please correct the highlighted fields.";

    formMessage.classList.add("text-danger");

    // Focus first invalid field

    if (!isEmailValid) {
      emailInput.focus();
    } else if (!isPasswordValid) {
      passwordInput.focus();
    }

    return;
  }

  // =================================================
  // SUCCESS
  // =================================================

  formMessage.textContent = "All fields are valid.";

  formMessage.classList.add("text-success");

  // Read values

  const email = emailInput.value.trim();

  const password = passwordInput.value;

  const remember = rememberMe.checked;

  console.log("Email:", email);

  console.log("Password:", password);

  console.log("Remember me:", remember);
});

// =====================================================
// REMEMBER ME
// =====================================================

rememberMe.addEventListener("change", function () {
  console.log("Remember me:", rememberMe.checked);
});
