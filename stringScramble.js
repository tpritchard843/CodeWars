// String Scramble 7kyu
// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.
// put the first character in the string at the index described by the first element of the array and so forth
// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).

// function scramble(str, arr) {
//   // map str to array with corresponding values
//   return arr.map((_, i) => str[arr.indexOf(i)]).join('');
// }

const scrambledString = (str, arr) => arr.map((_, i) => str[arr.indexOf(i)]).join('');

// examples
console.log(scramble('abcd', [0,3,1,2]), 'acdb', "Should return acdb");
console.log(scramble('sc301s', [4,0,3,1,5,2]), "c0s3s1", "Should return c0s3s1");
console.log(scramble('bskl5', [2,1,4,3,0]), "5sblk", "Should return 5sblk");
