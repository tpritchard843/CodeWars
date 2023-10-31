// 6kyu Mexican Wave
// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

// The input string will always be lower case but maybe empty.
// If the character in the string is whitespace then pass over it as if it was an empty seat

function wave(str){
  let result = [];
  // loop through string, capitalize result at letter and push to new arr
  for (let i = 0; i < str.length; i++) {
    let copy = str.split('');
    if(copy[i] !== ' ') {
    copy[i] = copy[i].toUpperCase();
    result.push(copy.join(''));
    }
  }
  return result;
}