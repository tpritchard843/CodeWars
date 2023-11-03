// Remove Duplicate Words
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

function removeDuplicateWords (str) {
  // split string into an array
  let wordsArr = str.trim().split(' ');
  let results = [];
  // loop through words in array remove duplicate words from the array
  for (i = 0; i < wordsArr.length; i++) {
    if (!results.includes(wordsArr[i])) {
      results.push(wordsArr[i]);
    }
  }
  // return trimmed array joined as a string again
  return results.join(' ');
}

// javascript Set method accomplishes the same thing by storing unique key-value pairs

// examples
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
