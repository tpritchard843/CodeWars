// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

function explode(str) {
  let result = '';
  let characters = str.split('');
  // for each character, convert it to a number
  // concatenate the string n number of times
  for (let i = 0; i < characters.length; i++) {
    let substring = characters[i].repeat(Number(characters[i]));
    result += substring;
  }
  return result;
}

//examples
console.log(explode("312"), "333122");
console.log(explode("102269"), "12222666666999999999");
