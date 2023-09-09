// 7kyu Two sum
// Take in two params: arr of nums & a target number
// Function should find two diff nums in the arr that sum to giv the target value
// Return the indices of these nums in an arr
// Target will always be the sum of two nums from the arr

// function twoSum(numbers, target) {
//   // loop through each number in the arr
//   // nest another loop that runs against every other num in the arr and sums
//   // once target num is reached, push those indices to a results arr
//   for (let i = 0; i < numbers.length-1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) return [i,j];
//     }
//   }
// }


// There are alot of comments of this solution being O(n^2). That means that for every item in the array you are going through every other item in the array. There is a solution that is O(n). Which means you go through each item in the array a constant number of times but you still view each item in the array at least once. It itterates through once and stores the index of the number in a hash. Then itterates through again and uses the hash to find the index of the pair that adds to the target. This is an example of trading space for time complexity. See below

// function twoSum(nums, target) {
//   let hash = {};
//   nums.forEach( (num, i) => {
//     hash[num] = i;
//   })
//   for (let j=0; j<nums.length; j++) {
//     let pair = target - nums[j];
//     let i = hash[pair];
//     if (i != undefined && i != j) {
//       return [j, i];
//     }
//   }
//   return [0,0];
// }

function twoSum(nums, target) {
  let hash = {};
  nums.forEach( (num, i) => {
    hash[num] = i;
  })
  for (let j=0; j<nums.length; j++) {
    let pair = target - nums[j];
    let i = hash[pair];
    if (i != undefined && i != j) {
      return [j, i];
    }
  }
  return [0,0];
}

//Examples
console.log(twoSum([1, 2, 3], 4)); // returns [0,2] or [2,0]
