// 7kyu divide & conquer
// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// return as a number

function divCon(arr){
  // loop through arr and use reduce function to get a single count
  // check for type and add or subtract accordingly, converting strings to numbers
  return arr.reduce( (sum, c) => typeof c === 'number' ? sum + c : sum - Number(c), 0);
}

// examples
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
