// All Unique (7kyu)
// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
// The string may contain any of the 128 ASCII characters.
// Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.

// function hasUniqueChars(str){
//   // split string into an array
//   const charactersArr = str.split('');
//   // test every character with a callback fn that checks for uniqueness
//   return charactersArr.every(function(char, i, arr) {
//     // if first occurence is equal to the current occurence, we know a character is unique
//     return arr.indexOf(char) == i;
//   });
// }

// function hasUniqueChars(str) {
//   return new Set(...str).size === str.length;
// }

const hasUniqueChars = str => new Set(...str).size === str.length;

// Examples
console.log(hasUniqueChars("  nAa"),false); // false bc two spaces
console.log(hasUniqueChars("abcdef"),true);
console.log(hasUniqueChars("aA"),true);
console.log(hasUniqueChars("++-"),false);
