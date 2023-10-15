// Descending Order 7kyu

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// function descendingOrder(n){
//   // sort numbers from highest to lowest
//   // convert to string and spread into array
//   // sort
//   //rejoin and convert back to number
//   return Number([...String(n)].sort((a,b) => b-a).join(''));
// }

const descendingOrder = n => Number([...String(n)].sort((a,b) => b-a).join(''));

// examples
console.log(descendingOrder(0), 0)
console.log(descendingOrder(1), 1)
console.log(descendingOrder(111), 111)
console.log(descendingOrder(15), 51)
console.log(descendingOrder(1021), 2110)
console.log(descendingOrder(123456789), 987654321)
