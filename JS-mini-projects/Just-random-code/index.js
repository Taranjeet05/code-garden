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
