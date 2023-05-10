// Leap Years 7kyu
//  determine whether a given year is a leap year or not
// Rules:
  // Years divisible by 4 are leap years
  // but years divisible by 100 are not leap years
  // but years divisible by 400 are leap years

// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  // Use modulus to check for remainders
  // Check for divisible by 400, then 100, then 4
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

// Examples
console.log(isLeapYear(2020), true);
console.log(isLeapYear(2000), true);
console.log(isLeapYear(2015), false);
console.log(isLeapYear(2100), false);
