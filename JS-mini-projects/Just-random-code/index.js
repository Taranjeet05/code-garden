// Phase 1: Syntax & Logic Warm-Up (Days 1–5)
// Do not touch complex data structures yet. Focus strictly on core JavaScript mechanics and problem decomposition using basic loops and conditionals.

// Topics to Review:

// Primitive vs. Reference types, Scope (closures, hoisting), and Arrow functions.

// Array Methods (crucial for DSA): .map(), .filter(), .reduce(), .find(), .sort().

// Basic String manipulation methods (split, join, substring, indexOf).

// Actionable Practice: Solve 15 to 20 very easy problems on platforms like LeetCode or HackerRank 
// (e.g., Reverse a String, Palindrome Check, FizzBuzz, Two Sum). Focus entirely on typing out solutions without looking up syntax.


function isPalindrome(s) {
    // 1. Convert to lowercase and remove all non-alphanumeric characters
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 2. Reverse the cleaned string and compare it to the original cleaned string
    const reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
}

// Example usage:
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false