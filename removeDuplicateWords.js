// 7kyu Remove duplicate words

// remove all duplicate words from a string, leaving only unique entries

function removeDuplicateWords(str) {
  // trim whitespace
  // split into array
  let wordsArr = str.trim().split(' ');
  // check to see if item is unique and push to results arr --> conditional
  let results = [...new Set(wordsArr)]; // Removes duplicates and stores unique values in a keyed collection
  // return results arr joined as a string
  return results.join(' ');
}

function removeDuplicateWordsEasier(str) {
  let wordsArr = str.trim().split(' ');
  return wordsArr.filter((w,i,arr) => arr.indexOf(w) === i).join(' ');
}

// Examples
console.log(removeDuplicateWords('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')); //'alpha beta gamma delta'
console.log(removeDuplicateWords("MByyFCs MByyFCs KYN E MByyFCs E MByyFCs MByyFCs TGCsKZhn KYN MByyFCs TGCsKZhn MByyFCs E MByyFCs MByyFCs MByyFCs")); // MByyFCs KYN E TGCsKZhn
