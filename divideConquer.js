// Divide and conquer 7kyu

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
// no funny biz, array will contain only nums and string nums
// return as a number


function divCon(arr){
  // loop through arr & check for type
  // if type is num, add to sum. if type is string, subtract from sum
  return arr.reduce( (acc,c) => typeof c === 'string' ?  acc - Number(c) : acc + c ,0);
}


// examples
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14);
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13);
