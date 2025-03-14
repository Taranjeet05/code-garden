// 7. Find the factorial of a number (e.g., 5!).

function factorial(num) {
  let result = 1;
  let i = 1;

  while (i <= num) {
    result *= i;
    i++;
  }

  return result;
}

// Example:
console.log(factorial(5)); // Output: 120
