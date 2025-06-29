function checkPasswordStrength(password) {
  let strength = 0;

  // Criteria checks
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isLongEnough = password.length >= 8;

  // Add points for each condition
  if (hasLower) strength++;
  if (hasUpper) strength++;
  if (hasNumber) strength++;
  if (hasSpecial) strength++;
  if (isLongEnough) strength++;

  // Decide final result
  let message = "";

  if (strength === 5) {
    message = "💪 Strong password";
  } else if (strength >= 3) {
    message = "🟡 Medium strength, improve it";
  } else {
    message = "🔴 Weak password, try again";
  }

  return {
    password,
    strength,
    message,
  };
}

// Example usage:
console.log(checkPasswordStrength("12345"));           // Weak
console.log(checkPasswordStrength("Taranjeet123"));    // Medium
console.log(checkPasswordStrength("T@r@njeeT123!"));   // Strong
