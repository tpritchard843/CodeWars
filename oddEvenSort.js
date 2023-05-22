// 7kyu Odd Even Sort
// Given a string str. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
// 0 is considered to be an even index
// All input strings are valid with no spaces

function sortMyString(str) {
  // split string into an array
  let evens = [];
  let odds = [];

  let charactersArr = str.split('');
  // loop through array and check each character for even index/0 or odd index
  charactersArr.forEach( (char, i) => {
    if (i % 2 === 0 || i === 0) {
      // save evens/0 in one variable
      evens.push(char);
    } else {
      // and odds in another variable
      odds.push(char);
    }
  })
  // rejoin the two with a space between themand return the string
  return evens.join('') + ' ' + odds.join('');
}

// examples
console.log(sortMyString("CodeWars"), "CdWr oeas");
console.log(sortMyString("YCOLUE'VREER"), "YOU'RE CLEVER");
