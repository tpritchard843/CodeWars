// 7kyu Number of Decimal Digits
// take in an integer as a param
// Determine the number of digits in the int

//convert integer to a string and return the length of the string
const numOfDigits = n => n.toString().length;

// examples
console.log(numOfDigits(5)); // 1
console.log(numOfDigits(12345)); // 5
console.log(numOfDigits(9876543210)); // 10
