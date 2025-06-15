//! DATE (s) in javascript.........

//                                                          Creating a Date

// current Date and Time -.

const now = new Date();
console.log(now);

// specific Date and Time (year, month(0-11), date, hours, minutes, and seconds)

const birthDay = new Date(2005, 0, 15);
console.log(birthDay.toString());

// from a string

const fromString = new Date("2005-01-15");
console.log(fromString);

console.log("*********************************************");

//                                                  Getting Parts of a Date

const today = new Date();

console.log("Year:", today.getFullYear()); // to get a full year
console.log("Month ( 0 - 11 ):", today.getMonth()); // to get a full Month(0 - 11)
console.log("Date :", today.getDate()); // to get a date
console.log("Day of the week: (0 - 6)", today.getDay()); // to get day of the week from like 0 = Sunday, 1 = Monday etc..
console.log("Hours :", today.getHours()); // to get Hours
console.log("Minutes :", today.getMinutes()); // to get Minutes
console.log("seconds :", today.getSeconds()); // to get Seconds
console.log("milliseconds :", today.getMilliseconds()); // to get milliseconds.

//                                                     Setting parts of a Date

const date = new Date();

date.setFullYear(2020); // year: 2020
date.setMonth(10); // Month: November
date.setDate(10); // date : 10th

console.log(date);

//                                                    Date Comparison

const date1 = new Date("2005-01-15");
const date2 = new Date("2005-11-10");

if (date1 > date2) {
  console.log("date1 is bigger than date2");
  return;
} else {
  console.log("Date 2  is bigger than date1");
}

console.log(date1.getTime() === date2.getTime()); // false
