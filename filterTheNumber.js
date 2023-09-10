// 7kyu Filter the Number (string)
// Your task is to return a number from a string.
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

var filterString = function(value) {
  let resultsString = ''
  // loop through string and filter by ascii code range between 48 and 57 ==> this represents digits
  for (let i=0; i < value.length; i++) {
    if (value.charCodeAt(i) >= 48 && value.charCodeAt(i) <= 57) {
      resultsString += value[i];
    }
  }
  // convert the string of numbers to a number and return
  return Number(resultsString);
}

// examples
console.log(filterString("123"), 123, `For the input "123"`);
console.log(filterString("a1b2c3"), 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd"), 123, `For the input "aa1bb2cc3dd"`);
