// sum of 2 numbers
function sum(a, b) {
  const sum = a + b;
  console.log("sum of 2:", sum);
}

sum(6, 5); // 11

// area of rectangle
const areaOfRectangle = (height, width) => {
  try {
    if (height <= 0 || width <= 0) throw new Error("please enter valid number");
    const area = height * width;

    console.log("Area of Rectangle:", area);
  } catch (error) {
    console.log(error.message);
  }
};

areaOfRectangle(2, 6); // 12
areaOfRectangle(-5, 6); // error
areaOfRectangle(50, -166); // error
areaOfRectangle(50, 0); // error
areaOfRectangle(200, 500); // 100000

// find odd or even Number
const findOddOrEven = (num) => {
  try {
    if (!Number.isInteger(num)) {
      throw new Error("Please give Whole Number.");
    }

    if (num % 2 === 0) {
      return console.log(`${num} is a even number`);
    }
    console.log(`${num} is a odd number`);
  } catch (err) {
    console.log(err.message);
  }
};

findOddOrEven(5); // odd
findOddOrEven(4); // even
findOddOrEven(3); // odd
findOddOrEven(-3); // odd
findOddOrEven(0); // even
findOddOrEven(1.5); // error
findOddOrEven(-2.9); // error

// find the smallest number

const findSmallestNumber = (arr) => {
  try {
    if (!arr) throw new Error("Give valid number");
    if (arr.length === 0) throw new Error("No Number is defined");
    const smallestNumber = Math.min(...arr);
    console.log(`${smallestNumber} is the Smallest Number`);
  } catch (err) {
    console.log(err.message);
  }
};

findSmallestNumber([1, 5, 10, 100, 500]); // 1
findSmallestNumber([40, -5, 10, 10, 800]); //-5
findSmallestNumber([0]); //0
findSmallestNumber([-1.5, 2.54, -3.55, 7, 10]); //-3.55

console.log("************");

const findSmallNumberAmongThree = (n1, n2, n3) => {
  let smallest = n1 < n2 ? n1 : n2;
  smallest = smallest < n3 ? smallest : n3;
  console.log(`${smallest}, is smallest among three`);
};

findSmallNumberAmongThree(100, 6, 7); //6
findSmallNumberAmongThree(10, 9, 7); // 7
findSmallNumberAmongThree(0, 9, 7); //0
findSmallNumberAmongThree(0, -9, 7); //-9
findSmallNumberAmongThree(0, 8, -7); //-7
findSmallNumberAmongThree(7.6, 1.2, -2.2); //-2.2
findSmallNumberAmongThree(-9.99, 2, -8.2); //-9.99

// return reverse of a string

const reverseStr = (str) => {
  const reverse = str.split("").reverse().join("");
  console.log("String reversed ✨:", reverse);
};
reverseStr("Hello my name is ");

// reverse string using for loop

const reverseStringWithLoop = (str) => {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
};

console.log(
  "reverse str with loop 💥:>",
  reverseStringWithLoop("reverse String with Loop")
);

// count vowels in a string

const checkVowels = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  const lowerStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < lowerStr.length; i++) {
    if (vowels.includes(lowerStr[i])) {
      count++;
    }
  }

  console.log(`Number of vowels in "${str}" is:`, count);
  return count;
};

checkVowels("WELCOME"); //3
checkVowels("This will check the vowels in a string"); //9

// count each vowels separately :
const checkEachVowelSeparately = (str) => {
  const lower = str.toLowerCase();
  let a = 0, e = 0, i = 0, o = 0, u = 0;

  for (let index = 0; index < lower.length; index++) {
    if (lower[index] === 'a') a++;
    else if (lower[index] === 'e') e++;
    else if (lower[index] === 'i') i++;
    else if (lower[index] === 'o') o++;
    else if (lower[index] === 'u') u++;
  }

  console.log(`a: ${a}, e: ${e}, i: ${i}, o: ${o}, u: ${u}`);
};

checkEachVowelSeparately("OpenAI");