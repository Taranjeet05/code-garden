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


isPalindrome("racecar"); // Output: true
isPalindrome("hello");   // Output: false
isPalindrome("A man a plan a canal Panama"); // Output: true
