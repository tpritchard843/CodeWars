// 7kyu Even numbers in an array
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order).

// Filter array by evens
// slice by -number

const evenNumbers = (arr, num) => arr.filter(x => x % 2 === 0).slice(-num);

// Examples
console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)) // [4,6,8]
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)) // [-8,26]
