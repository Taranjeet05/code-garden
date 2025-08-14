function sumArray(array) {
  // Step 1: handle null or short arrays
  if (!array || array.length < 3) return 0;

  // Step 2: find min and max
  let min = Math.min(...array);
  let max = Math.max(...array);

  // Step 3: remove one occurrence of min and max
  let copy = [...array];
  copy.splice(copy.indexOf(min), 1);
  copy.splice(copy.indexOf(max), 1);

  // Step 4: sum the remaining numbers
  return copy.reduce((sum, num) => sum + num, 0);
}

// Test cases
console.log(sumArray([6, 2, 1, 8, 10])); // 16
console.log(sumArray([1, 1, 11, 2, 3])); // 6
console.log(sumArray(null));             // 0
console.log(sumArray([2]));               // 0
