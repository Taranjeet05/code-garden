// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements,
// with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161,
// and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

//! what we can do is that we can multiply all the elem of arr a and then compare it with arr b weather all the elm in both of them is equal or not.

//! We can achieve this with for loop and the store all that value in an variable and then we will compare it with the arr b

const comp = (array1, array2) => {
  // handle edge cases
  if (!array1 || !array2) return false;
  if (array1.length !== array2.length) return false;

  const squaredArray1 = array1.map((n) => n * n).sort((a, b) => a - b);
  const sortedArray2 = [...array2].sort((a, b) => a - b);

  return squaredArray1.every((value, index) => value === sortedArray2[index]);
};

const array1 = [12, 13, 14, 15, 20, 55, 5, 6];
const array2 = [144, 169, 196, 225, 400, 3025, 25, 36];

console.log(comp(array1, array2));

// ❓ Question

// Write a function that checks whether array2 contains the squares of all numbers in array1.

// Order does not matter

// Frequency does matter

// Return true or false

// Example
// array1 = [1, 2, 3]
// array2 = [1, 4, 9]      // true

// array1 = [1, 2, 2]
// array2 = [1, 4, 4]      // true

// array1 = [1, 2, 2]
// array2 = [1, 4]         // false

const compare = (arr1, arr2) => {
  if (!arr1 || !arr2) return false;
  if (arr1.length !== arr2.length) return false;
  const squared = arr1.map((n) => n * n).sort((a, b) => a - b);
  const sorted = [...arr2].sort((a, b) => a - b);
  return squared.every((value, index) => value === sorted[index]);
};

const arr1 = [1, 2, 2];
const arr2 = [2, 2, 2];

console.log(compare(arr1, arr2));
