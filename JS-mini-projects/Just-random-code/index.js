//!                           What is a Map in JavaScript?
// >>> A Map is a built-in JavaScript object that allows you to store key-value pairs — just like an object, but:

// Key differences from a regular object ({}):
//! Feature	                                         Object ({})	                                                       Map (new Map())
// Keys can be	                                      Only strings or symbols	                                            Any data type (even objects, arrays)
// Order of keys	                                  Not guaranteed	                                                    Insertion order is preserved
// Size	                                              Object.keys(obj).length	                                            .size property
// Iteration	                                      Harder	                                                            Easier (e.g., map.forEach, map.entries())

const ageOfPerson = new Map();

// Add values to the Map
ageOfPerson.set("John", 21);
ageOfPerson.set("Micheal", 20);
ageOfPerson.set("Singh", 19);
ageOfPerson.set("Kim", 18);

// Get a value from the Map
console.log(ageOfPerson.get("John"));

// Loop through the Map
ageOfPerson.forEach((value, key) => {
  console.log(`${key} is ${value} years old`);
});
