import dayjs, { Dayjs } from "dayjs";
import toArray from "dayjs/plugin/toArray.js";
import quarterOfYear from "dayjs/plugin/quarterOfYear.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(toArray);
dayjs.extend(quarterOfYear);
dayjs.extend(relativeTime);

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


// Manipulate

console.log(today.startOf("year").format("dddd, MMMM-YYYY-DD"));
console.log(today.add(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.subtract(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.endOf("year").format("dddd, MMMM-YYYY-DD"));

// display

const date1 = dayjs("2005-01-15");
const date2 = dayjs("2005-11-20");

// Calculate the difference in hours between date1 and date2
console.log(date2.diff(date1, "month"));
