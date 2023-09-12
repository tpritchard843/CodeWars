// 7kyu Minimize sum of array
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .
// Array/list will contain positives only .
// Array/list will always have even size

const minSum = (arr) => arr.sort((a,b) => a-b).reduce((prev, curr) => prev + curr * arr.pop(),0);

// Examples
console.log(minSum([5,4,2,3])); // 22 === 5*2 + 3*4
console.log(minSum([9,2,8,7,5,4,0,6])) // 74 === 9*0 + 8*2 +7*4 +6*5
