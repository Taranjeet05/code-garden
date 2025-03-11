//                                            FOR LOOP

/* level 1 : Easy Mode */

// 1. Print numbers from 1 to 5

for (let i = 1; i <= 5; i++) {
  console.log(`Number = ${i}`);
}

// 2. Print even numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`All Even Numbers ${i}`);
  }
}

// 3. Print the sum of numbers from 1 to 10

let sum = 0;

for (let i = 1; i <= 10; i++) {
  sum += i;
}

console.log(`sum of all numbers: ${sum}`);

// 4. Print the multiplication table of 3 (from 3 × 1 to 3 × 10)

for (let i = 1; i <= 10; i++) {
  console.log(`3 * ${i} = ${i * 3}`);
}

// 5. Print numbers in reverse from 10 to 1

for (let i = 10; i >= 1; i--) {
  console.log(`Reverse Numbers: ${i}`);
}

/* Level 2: Medium Mode */

// 6. Find the factorial of 5 👉 Output: 5! = 120

let factorial = 1;

for (let i = 1; i <= 5; i++) {
  factorial *= i;
}

console.log(`Factorial of 5 👉 ${factorial} `);

// 7. Print the squares of numbers from 1 to 10 👉 Like: 1 4 9 16 ...

let square = [];

for (let i = 1; i <= 10; i++) {
  square.push(i ** 2);
}

console.log(`Squares of number : ${square}`);

/* 8. // 8. Given a string,
   print each character with its index 👉 Example: "Code" → C at 0, o at 1, etc. */

const characterWithIndex = (str) => {
  for (let i = 0; i < str.length; i++) {
    console.log(`${str} 👉 ${str[i]} at ${i}`);
  }
};
characterWithIndex("Code");

/* Level 3: Hard mode */

// 9. Print prime numbers between 1 and 30

let primeNumbers = [];

for (let i = 2; i <= 30; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeNumbers.push(i);
  }
}

console.log(`All the Prime Numbers from 1 to 30 👉 ${primeNumbers}`);

/* 10. Given an array of numbers, print only the positive ones
👉 Example: [-2, 4, -5, 3] → 4, 3

 */

const findPositiveNumber = (arr) => {
  let positiveNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumbers.push(arr[i]);
    }
  }
  console.log(
    `Here we have all positive numbers in an array: ${positiveNumbers}`
  );
};
findPositiveNumber([-10, 10, 5, 6, 7, -7, 9, -1, -2, -5]);
