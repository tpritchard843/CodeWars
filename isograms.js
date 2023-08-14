// PREP -- Params, rreturns, examples, pseudocode
// Ignore letter case, if no repeating letters, true, else false.
// Returns true if no repeating letters, otherwise false

function isIsogram(str){
  // If str empty -- return true
  // Loop through each letter and check if it is the last occurence
  // if all letters are unique, return true, else false
  str = str.toLowerCase();
  if (str === '') {return true};
  for (let letter of str) {
    if (str.indexOf(letter) !== str.lastIndexOf(letter)) {return false};
  }
  return true;
}

console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("isogram")); // true
console.log(isIsogram("aba")); // false