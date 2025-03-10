/*
Your team is writing a fancy new text editor and you've been tasked with 
implementing the line numbering.

Write a function which takes a list of strings and returns each line 
prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

var number = function (array) {
  //your awesome code here
  return array.map((line, index) => `${index + 1}: ${line}`);
};

/* Take an array and remove every second element from the array. Always keep 
the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr) {
  return arr.filter((item, index) => index % 2 === 0);
}

/*
💡 Challenge: Anagram Checker
Write a JavaScript function that checks if two strings are anagrams of each other.
Two strings are anagrams if they contain the same characters in the same 
frequency, but in a different order.

✅ Requirements:
Ignore case (i.e., "Listen" and "Silent" should be anagrams)
Ignore non-alphabet characters (spaces, punctuation, etc.)
*/

function isAnagram(str1, str2) {
  // Helper function to clean and sort the string
  function cleanString(str) {
    return str
      .toLowerCase()                    // convert to lowercase
      .replace(/[^a-z]/g, "")          // remove non-letter characters
      .split("")                       // convert string to array
      .sort()                          // sort the characters
      .join("");                       // join back to string
  }

  return cleanString(str1) === cleanString(str2);
}
