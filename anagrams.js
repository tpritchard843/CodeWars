// 7kyu Anagram Detection
// Take in two words and determine if one is an anagram of the other
// Returns true or false

let isAnagram = function(test, original) {
  // sort each word alphabetically and check for equality between the two
  let str1 = test.toLowerCase().split('').sort().join('');
  let str2 = original.toLowerCase().split('').sort().join('');
  return str1 === str2 ? true : false;
};

//Examples
console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("Buckethead", "DeathCubeK")); //true
console.log(isAnagram("dumble", "bumble")); //false