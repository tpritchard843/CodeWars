// 7kyu Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

// function findShort(str){
//   // split words into an array
//   let wordsArr = str.split(' ');
//   // iterate over the array and sort by length
//   let sortedWords = wordsArr.slice().sort((a,b) => a.length-b.length);
//   // return shortest word .length
//   return sortedWords[0].length;
// }

const shortestWord = str => Math.min(...str.split(" ").map (str => str.length));

// examples
console.log(findShort("bitcoin take over the world maybe who knows perhaps"), 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones"), 3);
console.log(findShort("Let's travel abroad shall we"), 2);
