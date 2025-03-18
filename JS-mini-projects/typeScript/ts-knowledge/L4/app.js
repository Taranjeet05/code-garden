//                             Function Return Type
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 50));
function greeting(name) {
    console.log("Hello ".concat(name));
}
greeting('Taranjeet Singh');
// let's practice Callback function::
function doSomething(callback) {
    callback('Hello, This message is from callback that honesty is the best policy');
}
doSomething(function (message) {
    console.log("Here is the message from callback function it says : ".concat(message));
});
//                         💡 IDEAS YOU CAN CODE YOURSELF
// 💬 1. Chat App Simulation
function sendMessage(callback) {
    callback('Hello Chat app Simulation');
}
sendMessage(function (message) { return console.log("here is you message >> ".concat(message)); });
