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

function checkAnswer(ans: string, onCorrect: (message : string) => void): boolean {
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

