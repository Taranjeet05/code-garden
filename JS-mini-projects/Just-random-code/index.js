function findOdd(arr) {
  let result = 0;

  // XOR all numbers together
  for (let num of arr) {
    result ^= num;
  }

  return result;
}

// Test cases
console.log(findOdd([7])); // 7
console.log(findOdd([1, 1, 2])); // 2
console.log(findOdd([0, 1, 0, 1, 0])); // 0
console.log(findOdd([20, 1, 1, 2, 2])); // 20
console.log(findOdd([10, 10, 10])); // 10
