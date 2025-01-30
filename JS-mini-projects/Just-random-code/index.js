/*Question:
You have a function that takes a deeply nested object and a dot-separated string path as input. Your task is to return the value at the given path, or undefined if the path does not exist. */

const data = {
  user: {
    profile: {
      name: "Taranjeet",
      age: 19,
      address: {
        city: "Frankfurt",
        country: "Germany"
      }
    }
  }
};

console.log(getValueAtPath(data, "user.profile.name")); // Output: "Taranjeet"
console.log(getValueAtPath(data, "user.profile.address.city")); // Output: "Frankfurt"
console.log(getValueAtPath(data, "user.profile.hobbies")); // Output: undefined
