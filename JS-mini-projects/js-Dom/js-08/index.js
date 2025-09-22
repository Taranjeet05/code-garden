const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const password = document.querySelector("#password");
const passwordError = document.querySelector("#passwordError");

const form = document.querySelector("#signupForm");

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  // minimum length 8
  if (password.length < 8) {
    return {
      isValid: false,
      error: "Password must be at least 8 characters long",
    };
  }
  // check for the uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one uppercase letter",
    };
  }
  // check for the lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one lowercase letter",
    };
  }
  // check for number
  if (!/\d/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one Number",
    };
  }
  // check for the special character
  if (!/[@$!%*?&]/.test(password)) {
    return {
      isValid: false,
      error: "Password must contain at least one special character (@$!%*?&)",
    };
  }
  return { isValid: true, error: "" };
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // CALL THE VALIDATION FUNCTIONS
  const isEmailValid = validateEmail(email.value);
  const passwordResult = validatePassword(password.value);

  // Clear previous errors
  emailError.textContent = "";
  passwordError.textContent = "";

  // Check email validation
  if (!isEmailValid) {
    emailError.textContent = "Please enter a valid email address";
  }

  // Check password validation
  if (!passwordResult.isValid) {
    passwordError.textContent = passwordResult.error;
  }

  // If both are valid, submit the form
  if (isEmailValid && passwordResult.isValid) {
    alert("Form submitted successfully!");
  }
});
// ****
