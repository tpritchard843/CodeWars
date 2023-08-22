// 7kyu Anagram Detection
// Take in two words and determine if one is an anagram of the other
// Returns true or false

let isAnagram = function(test, original) {
  // check if length of two words matches. If no match, return false
  if (test.length !== original.length) return false;
  // sort each word alphabetically and check for equality between the two
  let str1 = test.toLowerCase().split('').sort().join('');
  let str2 = original.toLowerCase().split('').sort().join('');
  console.log(str1, str2);
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
};

//Examples
console.log(isAnagram("foefet", "toffee")); //true
console.log(isAnagram("Buckethead", "DeathCubeK")); //true
console.log(isAnagram("dumble", "bumble")); //false