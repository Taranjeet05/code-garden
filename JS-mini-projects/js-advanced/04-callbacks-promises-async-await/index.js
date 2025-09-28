// callback if you are sending a function to another function in a parameter,
/// then the parameter function called as a callback

function time(random) {
  setTimeout(random, 1000);
}

time(function random() {
  console.log("hey");
});

// callBack HELL_:

// this function is not what we have it is somewhere else
function fetchProfile(userName, cb) {
  console.log("fetching profile data.......");

  setTimeout(() => {
    console.log(`Profile fetched of user ${userName}`);
    cb({ _id: 108, userName, age: 26, email: "jowpatel@gmai.com" });
  }, 2000);
}
const allData = (id, cb) => {
  console.log("fetching all posts.....");

  setTimeout(() => {
    cb({ _id: id, post: ["post1, post2, post3, post4"] });
  }, 3000);
};
const savedPosts = (id, cb) => {
  console.log("fetching saved posts....");
  setTimeout(() => {
    cb({ _id: id, savedPost: ["Hello", "HII", "Saved"] });
  }, 4000);
};

// !-- HELL
// this what we write to get the data
fetchProfile("Joe patel", (profileData) => {
  console.log(profileData);
  allData(profileData._id, (posts) => {
    console.log("Posts:", posts);
    savedPosts(profileData._id, (savedPosts) => {
      console.log("savedPosts:", savedPosts);
    });
  });
});

console.log("***********************************************");

// promises :
// we create a promises and promises has 2 states resolve or reject and we need
/// to write code for both of the state

let pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber > 5)
      resolve({ message: "resolved", number: randomNumber });
    else reject({ message: "rejected", number: randomNumber });
  }, 5000);
});

pr.then((val) => console.log("resolve with", val)).catch((err) =>
  console.log("rejected with", err)
);
