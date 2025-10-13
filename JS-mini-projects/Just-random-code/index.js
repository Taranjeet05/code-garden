// Write a function disemvowel(str) that takes a string and returns a new string with all vowels removed.
// Vowels are a, e, i, o, u — both lowercase and uppercase should be removed.

const removeVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
};

// Test
console.log(removeVowels("This website is for losers LOL!"));
