//                             Function Return Type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 50));
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting("Taranjeet Singh");
// let's practice Callback function::
function doSomething(callback) {
    callback("Hello, This message is from callback that honesty is the best policy");
}
doSomething(function (message) {
    console.log("Here is the message from callback function it says : ".concat(message));
});
function calculator(a, b, callback) {
    return callback(a, b);
}
var result = calculator(5, 3, function (x, y) { return x * y; });
console.log("The result is: ".concat(result));
//                         💡 IDEAS YOU CAN CODE YOURSELF
// 💬 1. Chat App Simulation
function sendMessage(callback) {
    callback("Hello Chat app Simulation");
}
sendMessage(function (message) { return console.log("here is you message >> ".concat(message)); });
/* 🎯 2. Quiz Game
Function: checkAnswer(ans: string): boolean
Callback: onCorrect(callback: () => void) */
function checkAnswer(ans, onCorrect) {
    var correctAnswer = "Taranjeet Singh";
    if (ans.toLowerCase() === correctAnswer.toLowerCase()) {
        onCorrect("🚀✅ correct! you nailed it. 🙆‍♀️🙆‍♂️🙆");
        return true;
    }
    else {
        onCorrect("❌, You answer is incorrect, Please try agian. 💬🙅🙅‍♂️🙅‍♀️");
        return false;
    }
}
checkAnswer("Taranjeet Singh", function (message) {
    console.log("quiz says:", message);
});
/* Greeting Message
Goal: Create a function that takes a name and a callback.
If the name is "Taranjeet", call the callback with a "Welcome back, hero!" message.
Otherwise, call the callback with "Hello, stranger!" */
function GreetingMessage(name, callback) {
    var validName = 'Taranjeet Singh';
    if (name.toLowerCase() === validName.toLowerCase()) {
        callback("Welcome back, hero!");
    }
    else {
        callback("Hello Stranger!");
    }
}
GreetingMessage('Taranjeet Singh', function (message) {
    console.log("There is message for you >> ".concat(message));
});
/* Math Check
Goal: Create a function that checks if a number is even or odd.
Use a callback to print a message like "Even number" or "Odd number".
The function should return true for even, false for odd.*/
function checkEvenOrOdd(num, callback) {
    if (num % 2 === 0) {
        callback("Even Number");
        return true;
    }
    else {
        callback("Odd Number");
        return false;
    }
}
checkEvenOrOdd(10, function (message) {
    console.log(message);
});
