// localStorage, sessionStorage and cookies

localStorage.setItem("name", "Taranjeet Singh");

localStorage.setItem("token", "token hai bhai ");

let value = localStorage.getItem("token");
console.log(value);

localStorage.removeItem("name");

localStorage.removeItem("token");

localStorage.setItem("name", ">Singh");

localStorage.setItem("name", "king");
localStorage.setItem("city", "new-delhi");
localStorage.clear();

// session Storage :

sessionStorage.setItem("name", "Tara");
sessionStorage.setItem("name", "Singh**");
sessionStorage.setItem("language", "javascript");

const val = sessionStorage.getItem("name");
const val1 = sessionStorage.getItem("language");

console.log(val);
console.log(val1);

sessionStorage.removeItem('name');

sessionStorage.clear();

// cookies :

document.cookie = 'email=singh@s.com'
document.cookie = 'name=cookie.singh'
console.log(document.cookie)