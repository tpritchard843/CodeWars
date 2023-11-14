// Smallest value of an array
// Write a function that can return the smallest value of an array or the index of that value.
// 2 params : an array and a second param that tells whether it should return the value or the index
// arr will always be filled with at least 1 num and no duplicates
// 2nd param will be a string containing either 'value' or 'index'

function min(arr, toReturn) {
  // conditionals to check for the value of toReturn
  // spread Arr values into Math.min()
  // return either index or value depending on the val of toReturn
  if (toReturn === 'value') {
    return Math.min(...arr);
  } else if (toReturn === 'index') {
    return arr.indexOf(Math.min(...arr));
  }
}

// examples
console.log(min([1,2,3,4,5], 'value'), 1);
console.log(min([1,2,3,4,5], 'index'), 0);
