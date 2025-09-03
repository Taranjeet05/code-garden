// Problem:
// Write a function opposite(number) that returns the opposite (negative if positive, positive if negative) of the given number.

const oppositeNumber = (number) => {
  return -number;
};

// Test
console.log(oppositeNumber(55));
console.log(oppositeNumber(-1));
console.log(oppositeNumber(-2005));
console.log(oppositeNumber(1008));
console.log(oppositeNumber(2025));

// Problem:
// You are given an array of consecutive letters (all lowercase or all uppercase) with exactly one letter missing. Return the missing letter.

/*
Example to understand charCodeAt:
*/

const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1].charCodeAt(0);
    const cur = array[i].charCodeAt(0);
    if (cur - prev !== 1) {
      return String.fromCharCode(prev + 1);
    }
  }
  return null;
};

// test

console.log(findMissingLetter(["a", "b", "c", "e"]));
console.log(findMissingLetter(["a", "z", "c", "e"]));
console.log(findMissingLetter(["a", "b", "c", "d", "k"]));
console.log(findMissingLetter(["x", "y", "z"]));
console.log(findMissingLetter(["1", "2", "3", "5"]));

// Problem:
// You get an array of numbers. Return the sum of all the positive ones.
// If there are no positive numbers, return 0.

const positiveSum = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
};

// test

console.log(positiveSum([1, -4, 7, 12])); // 20
console.log(positiveSum([-1, -2, -3])); // 0
console.log(positiveSum([10, 5, -2])); // 5
console.log(positiveSum([]));
