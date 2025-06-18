//                                        Never Type
/* never represents a value that never occurs. 
It's used when a function never successfully completes 
(like throwing an error or entering an infinite loop).
✅ When to Use:
A function that always throws an error.
A function that doesn't return (like a function that exits the program).*/

/*function processRequest(request: string): never {
  if (request === "error") {
    throw new Error("Error processing request!");
  } else {
    throw new Error(request?.toUpperCase());
  }
}

processRequest("success");*/

//                                      Unknown Type
/* unknown Type
unknown represents any value but is safer than any. 
When you use unknown, you need to check the type before using it, ensuring safer code.
✅ When to Use:
When you don’t know the type of a value yet but want to ensure that
 you validate it before using it.*/

let input: unknown;

//input = 'Taranjeet Singh';
//input= 46;
input = true;

if (typeof input === "string") {
  console.log(input.toUpperCase());
} else if (typeof input === "number") {
  console.log(input * 2);
} else {
  console.log(`This value is not allowed >>> ${input}`);
}

//                                        Any Type
/* any is the most flexible type in TypeScript. It can be anything, 
and you don't need to validate its type. However, it also sacrifices type safety.
✅ When to Use:
Use any sparingly, mostly when integrating third-party libraries or APIs, or 
when you're unsure of the type at a particular moment in time. */

function logData(data: any): void {
  console.log(`Here is you data >>>> ${data}`);
}

logData("Taranjeet Singh");
logData(true);
logData(5656);
logData(3 + 5);
logData([
  "Delhi",
  "Mumbai",
  "kolkata",
  "Amritsar",
  "Mohali",
  "pune",
  "Patna Sahib",
]);
logData({
  Nation: "India",
  capital: "Delhi",
  perfect: true,
  diverse: true,
  myPride: true,
});
