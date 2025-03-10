
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
      .toLowerCase() // convert to lowercase
      .replace(/[^a-z]/g, "") // remove non-letter characters
      .split("") // convert string to array
      .sort() // sort the characters
      .join(""); // join back to string
  }

  return cleanString(str1) === cleanString(str2);
}

/*
💡 Challenge: Find the First Non-Repeating Character
Write a JavaScript function that returns the first character in a string that does not repeat.
Ignore spaces and treat uppercase and lowercase letters as the same.

✅ Requirements:
Return the first non-repeating character (case-insensitive).
If all characters repeat, return null.
*/

function firstNonRepeatingChar(str) {
  const lowerStr = str.toLowerCase().replace(/\s/g, ""); // ignore spaces, lowercase
  const charCount = {};

  // Count occurrences of each character
  for (let char of lowerStr) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeating character
  for (let i = 0; i < lowerStr.length; i++) {
    if (charCount[lowerStr[i]] === 1) {
      return str[i]; // return original char with original casing
    }
  }

  return null; // if all characters repeat
}
