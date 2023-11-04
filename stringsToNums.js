// Convert an array of strings to an array of numbers (7kyu)
// you can receive floats as well

// function toNumberArray(stringArr){
//   let numbersArr = [];
//   // loop through string arr
//     // for each string in stringArr, convert to Num using Number() constructor
//   stringArr.forEach(str => {
//     let num = Number(str);
//     numbersArr.push(num);
//   })
//   return numbersArr;
// }

const toNumberArray = stringArr => stringArr.map(str => Number(str));
// Examples
console.log(toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3])
