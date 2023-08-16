// 7kyu Mumbling
// PREP
// Take in a string which includes letters from a..z and A..Z
// Return each letter n times where n is the corresponding position in the string, starting with uppercase
// abcd--> A-Bb-Ccc-Dddd

function accum(str) {
  let result = [];
	for (let i = 0; i < str.length; i++) {
    let subStr = `${str[i].toUpperCase()}${str[i].toLowerCase().repeat(i)}`;
    result.push(subStr);
  }
  return result.join('-');
}

//Examples
console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
console.log(accum("abcd")); // "A-Bb-Ccc-Dddd"
console.log(accum("cwAt")); // "C-Ww-Aaa-Tttt"

