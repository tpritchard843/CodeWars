// Sort the Gift Code second time (7kyu)
// accepts a string containing up to 26 unique alphabetical characters
// return a string containing the same characters in alphabetical order


// function sortGiftCode(code){
//   // split code str into an array
//   let charactersArr = code.split('');
//   // sort the array
//   let reversedArr = charactersArr.sort();
//   // join the array back together as a string and return
//   return reversedArr.join('');
// }

// const sortedGiftCode = code => code.split('').sort().join('');

//examples
console.log(sortedGiftCode('abcdef'), 'abcdef');
console.log(sortedGiftCode('pqksuvy'), 'kpqsuvy');
console.log(sortedGiftCode('zyxwvutsrqponmlkjihgfedcba'), 'abcdefghijklmnopqrstuvwxyz');


// Sort the Gift Code second time (7kyu)
// accepts a string containing up to 26 unique alphabetical characters
// return a string containing the same characters in alphabetical order

const sortedGiftCode = code => code.split('').sort().join();
