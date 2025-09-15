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

const number = prompt("Please give me a Number ⬇️⬇️💭");

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
