// Codewars array ladder

//8kyu Lost without a map
//Given an array of integers, return a new array with each value doubled

const map = arr => arr.map(num => num * 2);


// 7kyu sum of two lowest positive integers
// given an array with at least 4 positive integers(no floats or non-positive integers), return the sum of the two lowest positive integers

// function sumTwoSmallestNumbers(numbers) {
//     const sortedArr = numbers.sort((a,b) => a-b);
//     const lowest = sortedArr[0];
//     const secondLowest = sortedArr[1];
//     console.log(sortedArr, lowest, secondLowest);
//     return lowest + secondLowest;
// }

const sumTwoSmallestNumbers = numbers => numbers.sort((a,b) => a-b).reduce((acc, c, i) => i < 2 ? acc + c : acc + 0);

console.log(sumTwoSmallestNumbers([3, 1, 5, 6, 8]));
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));


// 6kyu Create phone number
// write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number
// correct order...space after parentheses "(123) 456-7890"

// function createPhoneNumber(numbers) {
//     return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
// }

function createPhoneNumber(numbers){
    let format = '(xxx) xxx-xxxx';
    numbers.forEach(num => {
        format = format.replace('x', num);
    })
    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))