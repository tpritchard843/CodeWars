// 7kyu Alternate Capitalization

// Take in a string as param -- lowercase, no spaces
// capitalize the letters that occupy even indexes and odd indexes separately

function capitalize(str){
  // split str into arr of characters.
  // check for even using modulus
  // capitalize one string's evens and another's odds separately and return those vars in an array
  let evens = str.slice().split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join('');
  let odds = str.slice().split('').map((char, i) => i % 2 !== 0 ? char.toUpperCase() : char).join('');
  return [evens, odds];
};

// examples
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']
console.log(capitalize("codewars")); // ['CoDeWaRs', 'cOdEwArS']
console.log(capitalize("abracadabra")); // ['AbRaCaDaBrA', 'aBrAcAdAbRa']
