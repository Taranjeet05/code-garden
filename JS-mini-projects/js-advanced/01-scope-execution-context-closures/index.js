// scope - functional scope, global scope and block scope

// functional scope - can only be use inside the function
// global scope - we can use it anywhere in the entire code/file
// blocked scope - {} only used inside the curly braces

// var a is functional scope only be used in the parent function

const abcd = () => {
  var a = 12;
};

var a = 12; // global scope

// if variable is used in side the {} like if else statement not in the function
// then it is a blocked scope.
// if() {}

// !-- Execution context

var student = "joe"; // global execution context

function introduce() {
  // functional execution context: stores in the memory
  console.log("Hello, my name is " + student); // functional execution context
}

introduce(); // global execution context

// !--lexical scope.

// lexical
const pi = () => {
  let a = 12; // lexical scope
  const ci = () => {
    console.log(a);
  };
  return ci;
};

const lexical = pi();
lexical();

// !-- closure definition and how variables are preserved

// closures are the function which is inside another parent function
// the inside function is returning. The returning function
// uses the variable of parent function is called closures.

function jet() {
  let bing = "king";
  return function () {
    // closures
    console.log(bing); //closures
  };
}

//how variables are preserved
// [[environment]] when closure is created the backLink will store the variables

const print = jet();
print();

// !-- use Case : Private counters and encapsulation

// Private counters
const countForMe = () => {
  let c = 0;
  return () => {
    c++;
    console.log(c);
  };
};

const fnc = countForMe();
fnc();
fnc();
fnc();

const func2 = countForMe();
func2();
func2();
func2();
func2();
func2();
func2();

//encapsulation

const clickLimiter = () => {
  let click = 0;
  return () => {
    if (click < 5) {
      click++;
      console.log(`clicked : ${click} times`);
    } else {
      console.error("You clicked max time wait for some time");
    }
  };
};

const click = clickLimiter();
click();
click();
click();
click();
click();
click();
