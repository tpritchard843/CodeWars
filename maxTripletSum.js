// Maximum Triplet Sum (Array Series #7) 7kyu

// PREP
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
// Array/list size is at least 3 .
// Array/list numbers could be a mixture of positives , negatives and zeros .
// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).

function maxTriSum(numbers){
  // remove duplicates --> Set constructor
  // sort smallest --> largest
  // sum last 3 digits of sorted arr
  return [...new Set(numbers)]
  .sort((a,b) => a-b)
  .slice(-3)
  .reduce((acc, c) => acc + c, 0);
}

// Examples
console.log(maxTriSum([3,2,6,8,2,3])); // 17
console.log(maxTriSum([2,9,13,10,5,2,9,5])); // 32
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12])); //-33
