// Flatten 7kyu

// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening.

var flatten = function (array){
  // loop through array of objects
  // add the items from the objects to a results array --> nested loop
  // return the results array
  return array.reduce(function(a,c) {
    return a.concat(c);
  }, []);
}

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]]), [1, 2, 3, "a", "b", "c", 1, 2, 3]);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [3, 4, 5, [9, 9, 9], "a,b,c"]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [[3], [4], [5], 9, 9, 8, [1, 2, 3]]);
