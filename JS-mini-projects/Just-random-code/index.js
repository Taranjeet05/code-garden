// Reverse a String
// Goal: Write a function that takes a string and returns it reversed.

// Example: reverseString("hello") should return "olleh".

// Hint: You can convert the string into an array of characters (.split('')), reverse the array (.reverse()), and join it back together (.join('')).

const reverseString  = (str) => {
    const split = str.split('').reverse().join('');
    return split;
}

const ans1 = reverseString('hello');
console.log(ans1)