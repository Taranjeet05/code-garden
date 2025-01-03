const nums = [1, 2, 3, 4, 5];

const squared = nums.map((items) => {
  return items * items;
});

console.log(squared);

const names = ["alice", "bob", "charllie", "danielle"];

const capitalised = names.map((name) => {
  return `${name[0].toUpperCase()}${name.slice(1)}`;
});

console.log(capitalised);

const pokemon = ["bulbasaur", "charmander", "Squirtles"];

const elements = pokemon.map((elem) => {
  return `<p>${elem}</p>`;
});

console.log(elements);

// Task 1 :: codewar

function twoSum(numbers, target) {
  const numMap = {};

  for (let i = 0; i < numbers.length; i++) {
    const currentNum = numbers[i];
    const complement = target - currentNum;

    if (complement in numMap) {
      return [numMap[complement], i];
    }

    numMap[currentNum] = i;
  }

  return [];
}

//Task 2 :: codewar

function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  return birds.filter((bird) => !geese.includes(bird));
}

// Task 3 :: codewar
function guessGifts(wishlist, presents) {
  let guessedGifts = [];

  presents.forEach((present) => {
    wishlist.forEach((item) => {
      if (
        item.size === present.size &&
        item.clatters === present.clatters &&
        item.weight === present.weight
      ) {
        // Avoid adding duplicates
        if (!guessedGifts.includes(item.name)) {
          guessedGifts.push(item.name);
        }
      }
    });
  });

  return guessedGifts;
}

//Task 4 :: codewar

function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (let ingredient in recipe) {
    if (!available[ingredient]) {
      return 0;
    }
    const possibleCakes = Math.floor(
      available[ingredient] / recipe[ingredient]
    );
    maxCakes = Math.min(maxCakes, possibleCakes);
  }

  return maxCakes;
}

//Task 5 :: codewar
function top3(products, amounts, prices) {
  let revenues = products.map((product, index) => {
    return {
      product: product,
      revenue: amounts[index] * prices[index],
      index: index,
    };
  });

  revenues.sort((a, b) => {
    if (b.revenue === a.revenue) {
      return a.index - b.index;
    }
    return b.revenue - a.revenue;
  });

  return revenues.slice(0, 3).map((item) => item.product);
}

//Task 6 :: codewar

function comp(array1, array2) {
  // If either array is null, return false
  if (!array1 || !array2) return false;

  // Check if the lengths of the array are same or not
  if (array1.length !== array2.length) return false;

  // Sort array and compare with each other
  const sortedSquares = array1.map((num) => num ** 2).sort((a, b) => a - b);
  const sortedArray2 = array2.sort((a, b) => a - b);

  return sortedSquares.every((value, index) => value === sortedArray2[index]);
}

/* Problem:
Write a function findLongestWord that takes a string as 
input and returns the longest word in that string. If 
there are multiple words of the same maximum length, 
return the first one. */

function findLongestWord(str) {
  // Split the string into an array of words
  const words = str.split(" ");

  // Find the longest word using reduce
  const longestWord = words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");

  return longestWord;
}

// Test the function
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // Output: "jumps"
console.log(findLongestWord("JavaScript is awesome")); // Output: "JavaScript"

/*
Here’s another JavaScript question for you:

Problem:
Write a function isPalindrome that takes a string as input and checks 
whether it is a palindrome. A palindrome is a word, phrase, or sequence that 
reads the same backward as forward (ignoring spaces, capitalization, and punctuation). */

function isPalindrome(str) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Check if the cleaned string is equal to its reverse
  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

// Test the function
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
console.log(isPalindrome("A man a plan a canal Panama")); // Output: true

/*Problem:
Write a function findLargestNumber 
that takes an array of numbers as input and returns the largest number in the array. */

function findLargestNumber(arr) {
  // Use Math.max.apply(null, arr) to find the largest number
  return Math.max.apply(null, arr);
}

// Test the function
console.log(findLargestNumber([3, 5, 7, 2, 8])); // Output: 8
console.log(findLargestNumber([-1, -5, -3, -4])); // Output: -1

/* Problem:
Write a function getUniqueCharacters that takes a string as input and returns a 
string containing only the characters that appear 
exactly once in the input string, in the order they appeared. */

function getUniqueCharacters(str) {
  const charCount = {}; // Object to store the frequency of each character

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Filter out characters that appear more than once
  let result = "";
  for (const char of str) {
    if (charCount[char] === 1) {
      result += char;
    }
  }

  return result;
}

// Test the function
console.log(getUniqueCharacters("swiss")); // Output: "w"
console.log(getUniqueCharacters("programming")); // Output: "progamin"
console.log(getUniqueCharacters("abacabad")); // Output: "c"

/* Problem:
Write a function longestSubstringWithoutRepeating that takes a string as 
input and returns the length of the longest substring without repeating characters. */

function longestSubstringWithoutRepeating(s) {
  let seen = new Map(); // Map to store characters and their last seen index
  let maxLength = 0; // Variable to track the maximum length
  let start = 0; // Start index of the current substring

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (seen.has(char) && seen.get(char) >= start) {
      // Update the start to exclude the last occurrence of the character
      start = seen.get(char) + 1;
    }
    // Update the last seen index of the character
    seen.set(char, i);
    // Update maxLength with the length of the current substring
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

// Test the function
console.log(longestSubstringWithoutRepeating("abcabcbb")); // Output: 3
console.log(longestSubstringWithoutRepeating("bbbbb")); // Output: 1
console.log(longestSubstringWithoutRepeating("pwwkew")); // Output: 3
console.log(longestSubstringWithoutRepeating("")); // Output: 0

/* 
Here's a JavaScript problem to solve:

Problem: Palindrome Checker
Write a function isPalindrome that takes a string as input and returns true if the string is a palindrome (reads the same forward and backward) and false otherwise.

Requirements:
Ignore case and non-alphanumeric characters.
Treat an empty string as a valid palindrome. */

function isPalindrome(s) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  // Compare the cleaned string with its reverse
  return cleanedString === cleanedString.split("").reverse().join("");
}

// Test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome(" ")); // true

/* The Challenge: Async Closures and Object Behavior
You are given the following code. Your task is to modify only the doSomething function so that the result array contains the correct values after all iterations complete. */

function doSomething(i) {
  setTimeout(() => {
    result.push(i);
  }, 0);
}

const result = [];
for (var i = 0; i < 5; i++) {
  doSomething(i);
}

setTimeout(() => {
  console.log(result); // Expected output: [0, 1, 2, 3, 4]
}, 1000);

/* 
Here's another challenging JavaScript question:

The Challenge: Deep Flatten an Array
Write a function deepFlatten that takes a nested array of arbitrary depth and returns a single, flattened array.

For example: */

function deepFlatten(arr) {
  const result = [];

  function flatten(item) {
    if (Array.isArray(item)) {
      item.forEach(flatten);
    } else {
      result.push(item);
    }
  }

  flatten(arr);
  return result;
}

// Example usage:
const input = [1, [2, [3, [4, [5]]]]];
console.log(deepFlatten(input));
// Output: [1, 2, 3, 4, 5]

/* Problem: The Maze Runner
You are given a 2D array representing a maze. Each cell can be one of the following:

0: A walkable path.
1: A wall.
S: The starting point.
E: The endpoint.
Write a function that determines if there is a path from S to E. You can only move up, down, left, or right. If a path exists, return true; otherwise, return false. */

/* Rules
You cannot move diagonally.
You cannot pass through walls (1).
The function should handle mazes of any size.
Avoid revisiting cells to prevent infinite loops.
 */
function canReachEnd(maze) {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [0, 1], // Right
    [1, 0], // Down
    [0, -1], // Left
    [-1, 0], // Up
  ];

  let start = null;

  // Find the starting point 'S'
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === "S") {
        start = [i, j];
        break;
      }
    }
    if (start) break;
  }

  const isValid = (x, y) =>
    x >= 0 &&
    y >= 0 &&
    x < rows &&
    y < cols &&
    (maze[x][y] === 0 || maze[x][y] === "E");

  const dfs = (x, y, visited) => {
    if (maze[x][y] === "E") return true;

    visited[x][y] = true;

    for (let [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (isValid(newX, newY) && !visited[newX][newY]) {
        if (dfs(newX, newY, visited)) return true;
      }
    }

    return false;
  };

  if (!start) return false;

  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  return dfs(start[0], start[1], visited);
}

const maze = [
  ["S", 0, 1, 0],
  [1, 0, 1, 0],
  [0, 0, 0, 1],
  [1, 1, 0, "E"],
];

console.log(canReachEnd(maze)); // Output: true

const maze2 = [
  ["S", 1, 1, 0],
  [1, 1, 1, 0],
  [0, 1, 1, 1],
  [1, 1, 1, "E"],
];

console.log(canReachEnd(maze2)); // Output: false

/* Problem: FizzBuzz with a Twist
Write a function that takes a number n and returns an array of strings. The rules are:

If a number is divisible by 3, return "Fizz".
If a number is divisible by 5, return "Buzz".
If a number is divisible by both 3 and 5, return "FizzBuzz".
Otherwise, return the number itself as a string.
  */

function fizzBuzz(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }
  return result;
}

console.log(fizzBuzz(15)); // Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
