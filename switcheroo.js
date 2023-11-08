// Switcheroo 7kyu
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// no other letters -- just a, b, and c

// function switcheroo(str){
//   // split str into an array and map according to function instructions
//   let charactersArr = str.split('');
//   // if a --> switch to b
//   // if b --> switch to a
//   // c -- do nothing
//   let switcherooArr = charactersArr.map(character => character === 'a' ? 'b' : character === 'b' ? 'a' : 'c');
//   // join switcherooArr and return
//   return switcherooArr.join('');
// }

const switcheroo = str => str.split('').map(character => character === 'a' ? 'b' : character === 'b' ? 'a' : 'c').join('');

// examples
console.log(switcheroo('abc'), 'bac');
console.log(switcheroo('aaabcccbaaa'), 'bbbacccabbb');
console.log(switcheroo('ccccc'), 'ccccc');
