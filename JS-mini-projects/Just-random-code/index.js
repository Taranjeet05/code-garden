// Problem: Convert the following values to numbers and strings, and check their types
let values = [true, false, "123", "abc", null, undefined, {}];

values.forEach((value) => {
  console.log("Original:", value);
  console.log("Number:", Number(value));
  console.log("String:", String(value));
  console.log("Boolean:", Boolean(value));
  console.log("Type:", typeof value);
  console.log("-------------");
});

// Problem: Filter out all falsy values from an array
let arr = [0, 1, false, 2, "", 3, null, "hello", undefined, NaN];

let truthyValues = arr.filter(Boolean);

console.log(truthyValues);


