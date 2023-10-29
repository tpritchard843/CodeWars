// Number of Occurences
// write a function, defined as a property of an array, that returns the num of occurences of a given element in that array

Array.prototype.numberOfOccurrences = function(element) {
  // loop through this array -- filter by element that we are searching for
  let countArr = this.filter(num => num === element); // [2,2]
  // return the lingth of that filtered
  return countArr.length;
}

let arr = [0, 1, 2, 2, 3];

console.log(arr.slice().numberOfOccurrences(0), 1, `Incorrect answer for 0, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(4), 0, `Incorrect answer for 4, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(2), 2, `Incorrect answer for 2, arr = [0, 1, 2, 2, 3]`);
console.log(arr.slice().numberOfOccurrences(3), 1, `Incorrect answer for 3, arr = [0, 1, 2, 2, 3]`);
