// 7kyu Remove duplicate words -- string

// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

function removeDuplicateWords (string) {
  // split into an array
  // identify unique words
  // concat unique words as a string and return
  let wordsArr = string.trim().split(' ');
  let uniqueWords = [...new Set(wordsArr)];
  return uniqueWords.join(' ');
}

// example
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'), 'alpha beta gamma delta');
