// Divide and conquer (7kyu)

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// return as a number

function divCon(arr) {
  let nums = [];
  let strings = [];
  // iterate over the array
  for (val of arr) {
      // check for input type
        // if number --> add
    if (typeof val === 'number') {
      nums.push(val);
    } else {
        // if string --> convert to number and subtract
      strings.push(val);
    }
  }
  let numsSum = nums.reduce((sum, c) => sum + c, 0);
  let stringsSum = strings.reduce((sum, c) => sum + Number(c), 0);
  // return a number
  return numsSum - stringsSum;
}

console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
