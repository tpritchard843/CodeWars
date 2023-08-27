// Accepts an array of integers as param
// check the array for order and return a value corresponding to how it is sorted
// Three outcomes : 
// "yes, ascending" -- if nums are sorted in ascending order
// "yes, descending" -- if nums are sorted in descending order
// "no" otherwise

function isSortedAndHow(arr) {
  let arrCopy = arr.slice();
  let sorted = arrCopy.sort((a,b) => a - b);
  // Condition 1: check if arr is sorted in ascneding order
  // Condition 2: check if arr is sorted in descending order
  // Return "No" otherwise
  if (JSON.stringify(arr) === JSON.stringify(sorted)) {
  return 'yes, ascending';
  } else if (JSON.stringify(arr) === JSON.stringify(sorted.reverse())) {
    return 'yes, descending';
  } else {
    return 'no';
  }
}

// examples
console.log(isSortedAndHow([1, 2])); // yes, ascending
console.log(isSortedAndHow([15, 7, 3, -8])); // yes, descending
console.log(isSortedAndHow([4, 2, 30])); // no