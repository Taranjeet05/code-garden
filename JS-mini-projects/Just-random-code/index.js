function likes(names) {
  const count = names.length;

  switch (count) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others like this`;
  }
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

/*
Try this similar challenge:

Write a function called `dislikes` that takes an array of names and returns a string describing who dislikes this, following the same pattern as the `likes` function above.

Example outputs:
dislikes([]) => "no one dislikes this"
dislikes(["Sam"]) => "Sam dislikes this"
dislikes(["Sam", "Alex"]) => "Sam and Alex dislike this"
dislikes(["Sam", "Alex", "Jamie"]) => "Sam, Alex and Jamie dislike this"
dislikes(["Sam", "Alex", "Jamie", "Taylor"]) => "Sam, Alex and 2 others dislike this"
*/

const dislikes = (names) => {
  const count = names.length;
  switch (count) {
    case 0:
      return "No one Dislike this";
    case 1:
      return `${names[0]} Dislikes this`;
    case 2:
      return `${names[0]} and ${names[1]} Dislike this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} Dislike this`;
    default:
      return `${names[0]}, ${names[1]} and ${count - 2} others Dislike this `;
  }
};
console.log(dislikes([]));
console.log(dislikes(["Sam"]));
console.log(dislikes(["Sam", "Alex"]));
console.log(dislikes(["Sam", "Alex", "Jamie"]));
console.log(dislikes(["Sam", "Alex", "Jamie", "Taylor"]));
