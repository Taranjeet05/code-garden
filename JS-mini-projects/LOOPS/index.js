// Q1 > Print numbers from 1 to 10 using a for loop.

for (let n = 1; n <= 10; n++) {
  console.log("Q1", n);
}

console.log("*******************");
// Q2 Print numbers from 10 to 1 using while loop.

let num = 10;

while (num >= 1) {
  console.log("Q2", num);
  num--;
}

console.log("*******************");
// Q3 Print even number from 1 to 20 using for loop.

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log("Even Number", i);
  }
  //   else {
  //     continue;
  //   }
}

console.log("checking", 20 % 2);

console.log("*******************");
// Q4 Print odd number from 1 to 15 using a while loop.

let i = 1;

while (i <= 15) {
  if (i % 2 === 1) {
    console.log("Odd Numbers", i);
  }
  i++;
}

console.log("*******************");
// Q5 print the multiplication table of 5 (i.e 5 * 1 = 5);

for (i = 1; i <= 10; i++) {
  const ans = i * 5;
  console.log(`5 * ${i} = ${ans}`);
}

console.log("*******************");
// Q6 Find the sum of number from 1 to 100 using a loop.

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log("Value of sum", sum);

console.log("*******************");
// Q7 Print all the number between 1 to 50 which is divisible by 3

for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("divisible by 3", i);
  }
}

console.log("*******************");
// Q8 Ask the user for a number and print whether each number from 1 to that number is even or odd. // (example '1 is odd', '2 is even');

// const number = prompt("Please give me a Number ⬇️⬇️💭"); // temporary disabled
const number = 2;

for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is a Even Number`);
  } else {
    console.log(`${i} is a Odd Number`);
  }
}

console.log("*******************");
// Q9 count How many number between 1 to 100 are divisible by by both 3 and 5.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} is divisible by both 3 and 5`);
  }
}

console.log("*******************");

// Q10 stop at First Multiple of 7

/* write a loop from 1 to 100 that :
- Prints each number
- Stops completely when it finds the first number divisible by 7 
*/

for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 7 === 0) {
    break;
  }
}

console.log("*******************");
// Q11 skip multiples of 3

/* Write a loop from 1 to 20 that:
- skip numbers divisible by 3 
- print all others
*/
// expected : 1 2 4 5 7 8 10 11 .. NOT (3, 6 , 9 etc)

for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

console.log("*******************");
// Q12 Print First 5 odd numbers only

/* write a loop from 1 to 100 that:
- Prints first 5 odd number only 
- then stops the loop.
*/

let count = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    count++;
    console.log(i);
  }

  if (count === 5) break;
}

// Q13 Write a loop to calculate the factorial of a given number
//Example: factorial(5) = 5 × 4 × 3 × 2 × 1 = 120

function factorial(n) {
  let result = 1;
  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = n; i >= 2; i--) {
    result *= i;
  }

  return result;
}
console.log(factorial(7));
