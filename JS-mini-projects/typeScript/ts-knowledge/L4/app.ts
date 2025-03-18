//                             Function Return Type

function add (num1 : number, num2: number) : number  {
  return num1 + num2; 
}

console.log(add(10, 50));

function greeting (name : string) : void {
  console.log(`Hello ${name}`);
}

greeting('Taranjeet Singh');

// let's practice Callback function::

function doSomething (callback : (message : string) => void) :void {
  callback('Hello, This message is from callback that honesty is the best policy')
}

doSomething((message) => {
  console.log(`Here is the message from callback function it says : ${message}`)
})

//                         💡 IDEAS YOU CAN CODE YOURSELF

// 💬 1. Chat App Simulation

function sendMessage(callback : (message : string) => void) : void {
  callback('Hello Chat app Simulation')
}

sendMessage((message) => console.log(`here is you message >> ${message}`));