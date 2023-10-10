// 7kyu digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.
// ie 312 ==> 333122
// 102269 ==> 12222666666999999999

function explode(str) {
  let results = ''
  //loop throough string and concatenate a new substr with correct num of digits to results str
  for (let i = 0; i < str.length; i++) {
    let substr = str[i].repeat(str[i]);
    results += substr;
  }
  return results;
}

console.log(explode('312')); // 333122
console.log(explode('102269')); // 12222666666999999999
