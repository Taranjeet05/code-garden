import { differenceInDays, format, isValid } from "date-fns";
import { addDays, subMonths } from "date-fns";
import { isBefore, isAfter } from "date-fns";
import { parse } from "date-fns";
import { formatInTimeZone } from "date-fns-tz";

// Formatting in date-fn

const today = new Date();
console.log(format(today, "dd-mm-yyyy eeeeee"));

console.log(format(today, "do MMMM yyyy, EEEE"));

// Add or Subtract Time

const tenDaysLater: Date = addDays(today, 10);

console.log(format(tenDaysLater, "do, MMMM - yyyy, EEEE"));

const subMonths2: Date = subMonths(today, 2);

console.log(format(subMonths2, "do, MMMM yyyy, EEEE"));

const getNextWeekDate = (date: Date): Date => {
  const sevenDaysLater = addDays(date, 7);
  return sevenDaysLater;
};

const calculateNextWeekDate = getNextWeekDate(today);

console.log(format(calculateNextWeekDate, "do MMMM yyyy, EEEE"));

// Compare Dates

const Date1 = new Date(2005, 0, 15);
const Date2 = new Date(2005, 10, 10);

const compare = isBefore(Date1, Date2);
const compare2 = isAfter(Date1, Date2);

console.log("We are comparing the dates between date 1 and 2 : ", compare); // date 1 come before the date 2 => true

console.log("We are comparing the dates between date 1 and 2 : ", compare2); // date 1 is not after date 2 => false

//calculate Differences

const startDate = new Date();
const endDate = new Date(2025, 11, 31);

const differencesInDays1 = differenceInDays(endDate, startDate);

console.log("Finding the difference in days :", differencesInDays1, "day(s)");

const calculateDaysSinceBirthday = (birthDate: Date): number => {
  const daysPassed = differenceInDays(today, birthDate);
  return daysPassed;
};

const daysSinceBirthday = calculateDaysSinceBirthday(new Date(2005, 0, 15));
console.log(
  "Calculating the days since the Birthday : ",
  daysSinceBirthday,
  "day(s)"
);

// Parse Date Strings

const date = parse("15-06-2025", "dd-MM-yyyy", new Date());
console.log(date.toLocaleDateString());

//! Always Validate the parsing because parse() will still return the date but it might be invalid...

const dateStr = parse("01-15-2005", "mm-dd-yyyy", new Date());

if (isValid(dateStr)) {
  console.log("Date is valid:", dateStr);
} else {
  console.log("Error the dateStr is not valid according to the format");
}

// validate Dates

const validateDate = new Date(1950, 0, 26);
console.log("checking the valid Date", validateDate);

// Time Zone

const timeZone = formatInTimeZone(
  new Date(),
  "Asia/Tokyo",
  "yyyy-MM-dd HH:mm:ss"
);
console.log(timeZone);
