//                                      While Loop

// 1. Write a while loop to print numbers from 5 to 15.

let i = 5;

while (i <= 15) {
  console.log(`Numbers: ${i}`);
  i++;
}

// 2.  Print numbers from 10 down to 1.

let downNumber = 10;

while (downNumber >= 1) {
  console.log(`downNumbers ${downNumber}`);
  downNumber--;
}

// 3. Find the sum of numbers from 1 to 50.

let sumOfNumber = 1;
let totalSum = 0;

while (sumOfNumber <= 50) {
  totalSum += sumOfNumber;
  sumOfNumber++;
}

console.log(`Sum of all number: ${totalSum}`);

// 4. Print all even numbers between 1 and 20.

let evenNumber = 1;
let totalEvenNumbers = [];

while (evenNumber <= 20) {
  if (evenNumber % 2 === 0) {
    totalEvenNumbers.push(evenNumber);
  }

  evenNumber++;
}

console.log(`All even number from 1 to 20 : >> ${totalEvenNumbers.join("-")}`);

// 5. Print all odd numbers between 1 and 20.

let oddNumbers = 1;

let totalOddNumbers = [];

while (oddNumbers <= 20) {
  if (oddNumbers % 2 !== 0) {
    totalOddNumbers.push(oddNumbers);
  }

  oddNumbers++;
}

console.log(`All odd numbers from 1 to 20 : >> ${totalOddNumbers.join("-")}`);

// 6. Count how many times the number 5 is found in an array.

const arr = [1, 2, 5, 7, 5, 5, 3];
let findOut = [];

let index = 0; // start index

while (index < arr.length) {
  if (arr[index] === 5) {
    findOut.push(arr[index]);
  }
  index++; // move to next index
}

console.log(`Total number of 5s: ${findOut.length}`);

// 7. Find the factorial of a number (e.g., 5!).
