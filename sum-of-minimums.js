// 7kyu SUm of Minimums
// Take in a 2D nested list (array, vector) of size m * n
// Task is to find the sum of the minimum values of each row

function sumOfMinimums(arr) {
  // let minimums = [];
  // // loop through arr and find the minimum in each subarray
  // for (let i = 0; i < arr.length; i++) {
  //   let min = Math.min(...arr[i]);
  //   minimums.push(min);
  // }
  // // add these to a minimums arr and sum them using reduce method
  // return minimums.reduce((acc,c) => acc + c, 0);
  return arr.reduce((acc,c) => acc + Math.min(...c), 0);
}

// Examples
console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])); //9
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]])); // 76