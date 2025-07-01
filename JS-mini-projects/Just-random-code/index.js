// 🕒 Question: Create a Countdown Timer
// Create a countdown timer in JavaScript that:

// Starts from 10 seconds.

// Logs the remaining time every second.

// When it reaches 0, it logs "⏰ Time's up!" and stops the timer.

// 🧠 Key Concepts to Practice:
// setInterval()

// clearInterval()

// Conditional logic

let timeLeft = 10;
const timer = setInterval(() => {
    if (timeLeft > 0) {
        console.log(timeLeft + ' seconds remaining');
        timeLeft--;
    } else {
        console.log("⏰ Time's up!");
        clearInterval(timer);
    }
}, 1000);