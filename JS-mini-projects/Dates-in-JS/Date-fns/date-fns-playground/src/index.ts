import {
  differenceInDays,
  format,
  isValid,
  addDays,
  subMonths,
  isBefore,
  isAfter,
  parse,
} from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

const today: Date = new Date();

// Formatting
console.log(format(today, "dd-MM-yyyy EEEE")); // e.g., 18-06-2025 Wednesday
console.log(format(today, "do MMMM yyyy, EEEE")); // 18th June 2025, Wednesday

// Add or Subtract Time
const tenDaysLater: Date = addDays(today, 10);
console.log(format(tenDaysLater, "do MMMM yyyy, EEEE"));

const twoMonthsAgo: Date = subMonths(today, 2);
console.log(format(twoMonthsAgo, "do MMMM yyyy, EEEE"));

const getNextWeekDate = (date: Date): Date => addDays(date, 7);
console.log(format(getNextWeekDate(today), "do MMMM yyyy, EEEE"));

// Compare Dates
const date1: Date = new Date(2005, 0, 15);
const date2: Date = new Date(2005, 10, 10);

console.log(`Date1 is before Date2? ${isBefore(date1, date2)}`); // true
console.log(`Date1 is after Date2? ${isAfter(date1, date2)}`); // false

// Difference in Days
const startDate: Date = new Date();
const endDate: Date = new Date(2025, 11, 31);
console.log(`Days difference: ${differenceInDays(endDate, startDate)} days`);

const calculateDaysSinceBirthday = (birthDate: Date): number =>
  differenceInDays(today, birthDate);
console.log(
  `Days since birthday: ${calculateDaysSinceBirthday(new Date(2005, 0, 15))}`
);

// Parse Date Strings & Validate
const parsedDate: Date = parse("15-06-2025", "dd-MM-yyyy", new Date());
console.log(parsedDate.toLocaleDateString());

const dateStr = parse("01-15-2005", "MM-dd-yyyy", new Date());
if (isValid(dateStr)) {
  console.log("Date is valid:", dateStr);
} else {
  console.log("Error: date string is not valid according to the format");
}

// Time Zone example
const tokyoTime = formatInTimeZone(
  new Date(),
  "Asia/Tokyo",
  "yyyy-MM-dd HH:mm:ss"
);
console.log(`Tokyo time: ${tokyoTime}`);
