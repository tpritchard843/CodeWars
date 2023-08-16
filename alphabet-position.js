// 6kyu Replace with alphabet position
//PREP
// Take in a string and return a new string where each character is replaced with the num representing its position in the alphabet

function alphabetPosition(text) {
  let result = '';
  // loop through string and compare to ASCII code
  for (let i = 0; i < text.length; i++) {
    let code = text.toUpperCase().charCodeAt(i);
    // compare code to uppercase characters in the ASCII table --> this will weed out non-letters
    if (code > 64 && code < 91) {
      result += (code - 64) + ' ';
    }
  }
  return result.trim();
}

//Examples
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
console.log(alphabetPosition("The narwhal bacons at midnight.")); // "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"

