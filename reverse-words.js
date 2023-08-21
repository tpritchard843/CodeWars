// 7kyu Reverse Words
// PREP
// Accepts a string parameter and reverses each word in the string

function reverseWords(str) {
  //create array of words
  let reverseWordArr = str.split(' ');
  let result = [];
  // loop through arr of words and reverse each one
  for (let word of reverseWordArr) {
    let reversedWord = word.split('').reverse().join('');
    // push reversed word to results arr
    result.push(reversedWord);
  }
  // return results arr joined as a string with spaces between words
  return result.join(' ');
}

//Examples
console.log(reverseWords('The quick brown fox jumps over the lazy dog.')); // ehT kciuq nworb xof spmuj revo eht yzal .god
console.log(reverseWords('apple')); // elppa
console.log(reverseWords('a b c d')); // a b c d