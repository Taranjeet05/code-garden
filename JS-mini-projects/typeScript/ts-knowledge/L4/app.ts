//                             Function Return Type

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(add(10, 50));

function greeting(name: string): void {
  console.log(`Hello ${name}`);
}

greeting("Taranjeet Singh");

// let's practice Callback function::

function doSomething(callback: (message: string) => void): void {
  callback(
    "Hello, This message is from callback that honesty is the best policy"
  );
}

doSomething((message) => {
  console.log(
    `Here is the message from callback function it says : ${message}`
  );
});

function calculator(
  a: number,
  b: number,
  callback: (x: number, y: number) => number
): number {
  return callback(a, b);
}

const result = calculator(5, 3, (x, y) => x * y);
console.log(`The result is: ${result}`);

//                         💡 IDEAS YOU CAN CODE YOURSELF

// 💬 1. Chat App Simulation

function sendMessage(callback: (message: string) => void): void {
  callback("Hello Chat app Simulation");
}

sendMessage((message) => console.log(`here is you message >> ${message}`));

/* 🎯 2. Quiz Game
Function: checkAnswer(ans: string): boolean
Callback: onCorrect(callback: () => void) */

function checkAnswer(
  ans: string,
  onCorrect: (message: string) => void
): boolean {
  const correctAnswer = "Taranjeet Singh";

  if (ans.toLowerCase() === correctAnswer.toLowerCase()) {
    onCorrect("🚀✅ correct! you nailed it. 🙆‍♀️🙆‍♂️🙆");
    return true;
  } else {
    onCorrect("❌, You answer is incorrect, Please try agian. 💬🙅🙅‍♂️🙅‍♀️");
    return false;
  }
}

checkAnswer("Taranjeet Singh", (message) => {
  console.log(`quiz says:`, message);
});

/* Greeting Message
Goal: Create a function that takes a name and a callback.
If the name is "Taranjeet", call the callback with a "Welcome back, hero!" message.
Otherwise, call the callback with "Hello, stranger!" */

function GreetingMessage(
  name: string,
  callback: (message: string) => void
): void {
  const validName = "Taranjeet Singh";

  if (name.toLowerCase() === validName.toLowerCase()) {
    callback(`Welcome back, hero!`);
  } else {
    callback(`Hello Stranger!`);
  }
}

GreetingMessage("Taranjeet Singh", (message) => {
  console.log(`There is message for you >> ${message}`);
});

/* Math Check
Goal: Create a function that checks if a number is even or odd.
Use a callback to print a message like "Even number" or "Odd number".
The function should return true for even, false for odd.*/

function checkEvenOrOdd(
  num: number,
  callback: (message: string) => void
): boolean {
  if (num % 2 === 0) {
    callback(`Even Number`);
    return true;
  } else {
    callback(`Odd Number`);
    return false;
  }
}

checkEvenOrOdd(10, (message) => {
  console.log(message);
});

/* Login Simulation
Goal: Make a function that takes a username and password.
If both are correct, use a callback to show "Login successful", and return true.
Otherwise, use the callback to show "Access denied", and return false. */

function loginSimulation(
  userName: string,
  password: string,
  callback: (message: string) => void
): boolean {
  const validUserName = "TaranjeetSingh013";
  const validPassword = "01256";

  if (
    userName.toLowerCase() === validUserName.toLowerCase() &&
    password === validPassword
  ) {
    callback(`Login Successful ✅✅`);
    return true;
  } else {
    callback(`Access denied ❌❌`);
    return false;
  }
}

loginSimulation("TaranjeetSingh013", "01256", (message) =>
  console.log(message)
);

/* Favorite Color
Goal: Create a function that takes a color and a callback.
If the color is "blue" or "green", the callback says "Nice choice!"
Else, it says "Try another color!" */

function favoriteColor(
  color: string,
  callback: (message: string) => void
): void {
  if (color.toLowerCase() === "blue" || color.toLowerCase() === "green") {
    return callback(`Nice Choice 🙆`);
  } else {
    return callback(`Try another color 🙅‍♂️`);
  }
}

favoriteColor("green", (message) => console.log(message));

/* Score Checker
Goal: Function takes a number (score) and a callback.
If score >= 80, callback says "Great Job!"
If score < 80, callback says "Keep trying!" */

function scoreChecker(
  score: number,
  callback: (message: string) => void
): void {
  if (score >= 80) {
    return callback(`Great Job`);
  } else {
    return callback(`Keep trying`);
  }
}

scoreChecker(100, (message) => console.log(message));
