/*
Your team is writing a fancy new text editor and you've been tasked with 
implementing the line numbering.

Write a function which takes a list of strings and returns each line 
prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

var number = function (array) {
  //your awesome code here
  return array.map((line, index) => `${index + 1}: ${line}`);
};

/* Take an array and remove every second element from the array. Always keep 
the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that! */

function removeEveryOther(arr){
  //your code here
}