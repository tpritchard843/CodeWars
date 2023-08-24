// 7kyu Remove anchor from url
// Take in a url
// if there is an anchor (#) char, remove that char and anything that comes after it

function removeUrlAnchor(url){
  // split url string into an array
  let charactersArr = url.split('');
  // check if url includes #
  // If anchor, cut the the array in two at that index and return first half
  if (charactersArr.includes('#')) {
    return charactersArr.slice(0, charactersArr.indexOf('#')).join('');
  } else {
    return url;
  }
}

// Examples

console.log(removeUrlAnchor('www.codewars.com#about')); // www.codewars.com
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about')); // 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/')); // 'www.codewars.com/katas/'