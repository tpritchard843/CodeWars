// The vowel code 6kyu
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
const vowelsMap = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5'
}
// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

function encode(string) {
  let vowels = Object.keys(vowelsMap);
  // loop through the string's characters
  // check if a character is a vowel
  // replace vowels with corresponding characters
  // return string
  return string.split('').map(char => {
    return vowels.includes(char) ? char = vowelsMap[char] : char;
  }).join('');
}

//examples
console.log(encode('hello'), 'h2ll4');
console.log(encode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
console.log(encode('This is an encoding test.'), 'Th3s 3s 1n 2nc4d3ng t2st.');


// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
//For example, decode("h3 th2r2") would return "hi there".
// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function decode(string) {
  let vowels = Object.keys(vowelsMap);
  let vowelVals = Object.values(vowelsMap);
  // check if char is a number --> will always correspond with a vowel
  // if it is, replace it with the key from vowels
  return string.split('').map((char) => {
    if (vowelVals.includes(char)) {
      idx = vowelVals.indexOf(char);
      return char = vowels[idx];
    }
    return char;
  }).join('');
}

// examples
console.log(decode('h2ll4'), 'hello');
console.log(decode('How are you today?'), 'H4w 1r2 y45 t4d1y?');
