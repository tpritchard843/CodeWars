// 7kyu Most Digits
// Find the number with the most digits.
// If two numbers in the argument array have the same number of digits, return the first one in the array.\
// can't change order of the array

// function findLongest(array){
//   // loop through the array
//   // convert each number to a String
//   // check for length and return first instance, converted back to a number
//   return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
// }

const longestNumber = arr => arr.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));

// examples
console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
