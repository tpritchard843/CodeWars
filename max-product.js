// 7kyu Maximum product
// Take in an arr of nums and return the max product obtained from multiplying two adjacent numbers in the array

function adjacentElementsProduct(arr) {
  // max product
  let products = [];
  // loop through and multiply each number by the next
  for (let i =0; i < arr.length-1; i++) {
    // push product of adjacent nums into products arr
    products.push(arr[i] * arr[i+1]);
  }
  // spread products arr into Math.max method to apply it to the array (...arr)
  return Math.max(...products);
}

// examples
console.log(adjacentElementsProduct([1,2,3])); // 6
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
console.log(adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48])); // 50
console.log(adjacentElementsProduct([-23, 4, -5, 99, -27, 329, -2, 7, -921])); // -14
