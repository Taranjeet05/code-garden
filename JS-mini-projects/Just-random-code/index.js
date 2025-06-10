function positiveSum(arr) {
  return arr
    .filter(num => num > 0) // keep only positive numbers
    .reduce((sum, num) => sum + num, 0); // add them together
}


positiveSum([1, -2, 3, 4, -5]) // ➞ 8 (1 + 3 + 4)
