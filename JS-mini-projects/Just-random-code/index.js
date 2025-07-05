const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reversedArr = [];

for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(arr[i]);
}

console.log(reversedArr);

const numbers = [1, 2, 3, 4, 4, 5];
const unique = [];

for (let i = 0; i < numbers.length; i++) {
  if (!unique.includes(numbers[i])) unique.push(numbers[i]);
}

console.log(unique);

// ****

const user = {
  name: "joe",
  age: 20,
  country: "India",
};

const count = Object.keys(user).length;

console.log(count);
f