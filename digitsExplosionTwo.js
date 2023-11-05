// Digits explosion
// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(str) {
  let results = '';
  // loop through string and create a substring containing num of digits, then concatenate in results str
  for (let i=0; i< str.length; i++) {
    let substr = str[i].repeat(str[i]);
    results += substr;
  }
  return results;
}

//examples
console.log(explode('312'), '333122');
console.log(explode("102269"), "12222666666999999999");
