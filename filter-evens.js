// Return evens
// Takes in an array
// Filter out even odd nums
//Return an array containing only even numbers from the passed in arg

const getEvenNumbers = arr => arr.filter(n => n % 2 === 0);

console.log(getEvenNumbers([2,3,4,5,6])); // [2,4,6]
console.log(getEvenNumbers([14,12,11,23,26,32,37])); // [14,12,26,32]