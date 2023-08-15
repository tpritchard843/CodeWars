// 7kyu You're a square
// Given a number, return true if it is a perfect square and false if it is not

var isSquare = n => Number.isInteger(Math.sqrt(n)); 

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(4));
console.log(isSquare(26));