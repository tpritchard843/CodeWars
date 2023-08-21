// ROT13
// Short for rotate by 13 places
// https://en.wikipedia.org/wiki/ROT13
// For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
// Take in a str as param, use ROT13 cipher protocol to decipher the str and return the message

function rot13(str) {
  // have a string of the alphabet
  const originalAlpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // have a string of the alphabet ciphered
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";
  // do a replace based off of indexes
  // regex expression searches all occurences of letters /[a-z]/gi
  return str.replace(/[a-z]/gi, letter => cipher[originalAlpha.indexOf(letter)]);
}

// Examples 
console.log(rot13("EBG13 rknzcyr.")); // "ROT13 example."
console.log(rot13("This is my first ROT13 excercise!")); // "Guvf vf zl svefg EBG13 rkprepvfr!"
