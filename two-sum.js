// 7kyu Two sum
// Take in two params: arr of nums & a target number
// Function should find two diff nums in the arr that sum to giv the target value
// Return the indices of these nums in an arr
// Target will always be the sum of two nums from the arr

function twoSum(numbers, target) {
  // loop through each number in the arr
  // nest another loop that runs against every other num in the arr and sums
  // once target num is reached, push those indices to a results arr
  for (let i = 0; i < numbers.length-1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i,j];
    }
  }
}

//Examples
console.log(twoSum([1, 2, 3], 4)); // returns [0,2] or [2,0]
