// 6kyu Convert to camelCase
// Take in a string as an argument. Two possibilities: dash or underscore delimited words
// The first word within the output should be capitalized only if the original word was capitalized

function toCamelCase(str){
  // remove hyphens/underscores from stringcd
  // capitalize the first letter of each word
  // rejoin the words in camelCase and return
  str = str.replaceAll('_', ' ');
  str = str.replaceAll('-', ' ');
  let newStr = str.split(' ')
  return newStr
  .map((word,i) => i > 0 ? word.split('')
    .map((char, i) => i === 0 ? char.toUpperCase(): char)
    .join('') : word)
  .join('');
}

// Examples
console.log(toCamelCase("the_stealth_warrior")) // theStealthWarrior
console.log(toCamelCase("The-Stealth-Warrior")) // TheStealthWarrior
console.log(toCamelCase('')); // ''
