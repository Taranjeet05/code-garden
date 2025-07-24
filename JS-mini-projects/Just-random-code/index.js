function isPangram(string) {
  const alphabet = new Set();

  for (let char of string.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      alphabet.add(char);
    }
  }

  return alphabet.size === 26;
}

isPangram("The quick brown fox jumps over the lazy dog.");
// ➞ true

isPangram("Hello world");
// ➞ false

isPangram("Pack my box with five dozen liquor jugs");
// ➞ true
