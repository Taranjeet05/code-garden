import dayjs, { Dayjs } from "dayjs";
import toArray from "dayjs/plugin/toArray.js";
import quarterOfYear from "dayjs/plugin/quarterOfYear.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import weekday from "dayjs/plugin/weekday.js";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(toArray);
dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);
dayjs.extend(weekday);
dayjs.extend(customParseFormat);

// Demonstrates basic usage of the Dayjs library for date and time manipulation.
const today: Dayjs = dayjs();
console.log(today.format("dddd, MMMM-YYYY-DD"));
console.log(
  today.year(),
  today.month(),
  today.date(),
  today.hour(),
  today.minute(),
  today.second(),
  today.millisecond()
);

// middlewares or dayjs plugins for extra functionality in dayjs ->
//! but each plugin increases the library's footprint.

console.log(today.toArray()); // we will get year,month,date,hour,minute,second,millisecond in an array format...
console.log(today.daysInMonth());

// some more plugins
console.log(today.quarter());
console.log(today.fromNow());
const Date0 = dayjs("2019-04-09");
console.log(Date0.fromNow());
console.log(dayjs("2025-01-15").from("2025-11-20"));

// Get the date of the same weekday from the previous week using the weekday plugin
const lastWeekSameDay: Dayjs = today.weekday(today.weekday() - 7);
console.log(
  "Last week's same weekday:",
  lastWeekSameDay.format("dddd, MMMM-YYYY-DD")
);

// Get the date of the same weekday in the next week using the weekday plugin
const nextWeekSameDay: Dayjs = today.weekday(today.weekday() + 7);
console.log(
  "Next week's same weekday:",
  nextWeekSameDay.format("dddd, MMMM-YYYY-DD")
);

// Manipulate

console.log(today.startOf("year").format("dddd, MMMM-YYYY-DD"));
console.log(today.add(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.subtract(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.endOf("year").format("dddd, MMMM-YYYY-DD"));

// display

const date1: Dayjs = dayjs("2005-01-15");
const date2: Dayjs = dayjs("2005-11-20");

// Calculate the difference in months between date1 and date2
console.log(date2.diff(date1, "month"));

// Parse a date string with a specific format

const dateString: string = "15-01-2005";
const parsedDate: Dayjs = dayjs(dateString, "DD-MM-YYYY", true); // true for strict parsing

if (parsedDate.isValid()) {
  console.log("Parsed date :", parsedDate.format("YYYY-MM-DD"));
} else {
  console.log("Invalid date format");
  console.log("Please use the format DD-MM-YYYY");
  console.log("For Example: 15-01-2005");
}

// Add / Subtract Time

const tenDaysLater = dayjs().add(10, "day");
console.log(tenDaysLater.format("dddd, MMM D YYYY"));

const twoMonthsAgo = dayjs().subtract(2, "month");
console.log(twoMonthsAgo.format("dddd, MMM D YYYY"));

// Compare Dates

const date11 = dayjs("2005-01-15");
const date22 = dayjs("2005-11-10");

console.log(date11.isBefore(date22)); // true
console.log(date11.isAfter(date22)); // false
