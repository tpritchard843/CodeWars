// Sort an array by value and index 7kyu

// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.
// For sorting, the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// function sortByValueAndIndex(array) {
//   let products = [];
//   // create an idx that is 1 larger than the actual array i --> this prevents the product at array[0] from being 0\
//   // multiply idx by value
//   for (let i = 0; i < array.length; i++) {
//     let idx = i + 1;
//     let product = array[i] * idx;
//     console.log(array[i], idx, ' = ', product);
//     products.push(product);
//   }
//   // sort by products in ascending order
//   return products.sort((a,b) => a - b);
// }

// in this solution they are mapping an array to every element. For each nested array, the first element is the value, and the second element is the value * index + 1 (or the value needed to sort by). They then sort by only the product value that is in each arrays index at 1. They then remap the initial value across the array. (this is a very similar to my solution, the difference is I used objects inside the array instead of nested arrays.

function sortByValueAndIndex(array) {
  return array
		.map((x, i) => [x, x * i + x])
		.sort((a, b) => a[1] - b[1])
		.map((a) => a[0]);
}

console.log(sortByValueAndIndex([ 23, 2, 3, 4, 5 ]), [ 2, 3, 4, 23, 25 ]);
// console.log(sortByValueAndIndex([ 26, 2, 3, 4, 5 ]), [ 2, 3, 4, 5, 26 ]);
