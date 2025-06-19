import dayjs, { Dayjs } from "dayjs";
import toArray from "dayjs/plugin/toArray.js";

dayjs.extend(toArray);

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

// Manipulate

console.log(today.startOf("year").format("dddd, MMMM-YYYY-DD"));
console.log(today.add(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.subtract(10, "day").format("dddd, MMMM-YYYY-DD"));
console.log(today.endOf('year').format("dddd, MMMM-YYYY-DD"));

