const array: string[] = ["JavaScript", "React", "Next.js", "Node", "Express"];

const newArray = array.map((skill) => skill.toUpperCase());

console.log(newArray);

// Easy Question

const num: number[] = [1, 2, 3, 4];

const newNum = num.map((num) => num * 2);

console.log(newNum);

// Hard Question

type UserType = {
  id: number;
  name: string;
  age: number;
  active: boolean;
};

const users: UserType[] = [
  { id: 1, name: "BOB", age: 18, active: true },
  { id: 2, name: "Micheal", age: 21, active: false },
];

const result = users.map((user) => ({
  ...user,
  Status: user.active ? "ACTIVE 💚" : "INACTIVE 🍎",
}));

console.log("Map result:", result);
// Filter :

// Easy : Returning even numbers
const arr: number[] = [1, 2, 3, 4, 5, 6];

const result2 = arr.filter((item) => item % 2 === 0); // Even Numbers
console.log("Result2:", result2);

// Hard : Return only incomplete todos.

type TodoType = {
  id: number;
  completed: boolean;
};

const todos: TodoType[] = [
  { id: 1, completed: true },
  { id: 2, completed: false },
  { id: 3, completed: true },
  { id: 4, completed: true },
  { id: 5, completed: false },
  { id: 6, completed: false },
];

const result3 = todos.filter((todo) => todo.completed === false);

console.log("result3:", result3);

// Find : “Give me the FIRST match (or undefined)”

// Easy : find 3 in it
const arr108: number[] = [2, 5, 6, 3, 108, 456, 800];

const findResult = arr108.find((number) => number === 3);

console.log("Find Result", findResult);

// Hard : find the admin user.

type UserArrType = {
  id: number;
  name: string;
  age: number;
  role: string;
};

const userArr: UserArrType[] = [
  { id: 1, name: "Bob", age: 55, role: "admin" },
  { id: 2, name: "split", age: 25, role: "user" },
  { id: 3, name: "slice", age: 66, role: "guest" },
];

const findRole = userArr.find((userRole) => userRole.role === "admin"); // gave us admin object

console.log("Finding Admin Roles:", findRole);

// findIndex : “Where is it located?”

// easy : find the index of 10
const numbers: number[] = [5656, 56, 55, 5, 10, 100, 1, 2, 9, 3, 8, 7];

const res = numbers.findIndex((number) => number === 10);

console.log("Finding the Index of 10:", res);

// Hard : Find index of item with id = 2 and increase its qty by 1.

type CartType = {
  id: number;
  Qty: number;
};

const cart: CartType[] = [
  { id: 1, Qty: 1 },
  { id: 2, Qty: 2 },
  { id: 3, Qty: 7 },
  { id: 4, Qty: 10 },
  { id: 5, Qty: 2 },
];

const index = cart.findIndex((cart) => cart.id === 2); // this will give us the item in cart with id contains 2

if (index !== -1 && cart[index]) {
  cart[index].Qty += 1;
}

console.log("Check the updated cart item qty:", cart);

// Some : “Is at least ONE item true?”

// Easy : check if contains any even number.
const numbers1: number[] = [1, 3, 5];

const result02 = numbers1.some((number) => number % 2 === 0);

console.log("Checking for any Even Number:", result02);

// Hard : Check if any user is banned.
type User8 = {
  id: number;
  user: string;
  banned: boolean;
};

const users8: User8[] = [
  { id: 1, user: "bob", banned: false },
  { id: 2, user: "micheal", banned: true },
];

const UserBanned = users8.some((user) => user.banned === true);

console.log("Checking for any Banned User:", UserBanned);

// Every() : “Are ALL items true?”

// Easy : check if all the items in an array are even?

const tableOfThree: number[] = [3, 6, 9, 12, 15, 18, 21, 24, 27];

const resultEvery = tableOfThree.every((number) => number % 2 === 0); // false

console.log("Checking the Result for Every:", resultEvery);

// Hard : Check if all tasks are completed.
type Tasks01 = {
  done: boolean;
};

const tasks01: Tasks01[] = [
  {
    done: true,
  },
  { done: false },
  { done: true },
];

const resultForTask = tasks01.every((task) => task.done === true); // false

console.log("Checking for all tasks are Completed:", resultForTask);

// Reduce : “Take many → return ONE value”

const numbers22: number[] = [1, -1, 5, 10];
const bingo: number[] = [1, 2, 3, 4];

const sum00 = numbers22.reduce((acc, curr): number => {
  return acc + curr;
}, 0);

const bingoSum = bingo.reduce((acc, curr): number => {
  return acc + curr;
}, 0);

console.log("Sum of all the Numbers with Reduce sum00:", sum00);
console.log("Sum of all the Numbers with Reduce bingo:", bingoSum);

// Hard : return completed value and pending value in an object:
type TodoSType = {
  completed: boolean;
};

const todoS: TodoSType[] = [
  { completed: true },
  { completed: false },
  { completed: true },
  { completed: true },
  { completed: false },
  { completed: false },
  { completed: false },
  { completed: true },
  { completed: true },
];

const checkingStatus = todoS.reduce(
  (acc, curr) => {
    if (curr.completed) {
      acc.completed += 1;
    } else {
      acc.pending += 1;
    }
    return acc;
  },
  { completed: 0, pending: 0 }
);

console.log(checkingStatus);
