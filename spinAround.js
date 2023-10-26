// Take in an array with directions
// each array item is a string -- either 'left' or 'right', no funny biz
// right increments degrees by 90, and left decrements by 90.
// 360 degrees is a circle
// calculate how many rotations it makes & return a positive number

// function spinAround(turns) {
//   let degrees = 0;
//   // loop through turns array
//   for (let i =0; i < turns.length; i++) {
//     // if right, increment degrees by 90
//     if (turns[i] === 'right') {
//       degrees += 90;
//     }
//     // if "left", decrement degrees by 90
//     else if (turns[i] === 'left') {
//       degrees -= 90;
//     }
//   }
//   // take absolute value of degrees and divide by 360, and round down to nearest whole num
//   let rotations = Math.floor(Math.abs(degrees / 360));

//   return rotations;
// }

const spinAround = turns => Math.floor(Math.abs(turns.reduce((acc, c) => c === 'right' ? acc + 90 : acc -90, 0) / 360));

//examples

console.log(spinAround(["left", "right", "left", "right"], 0)); // 0
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"], 2));
console.log(spinAround(["left", "left", "left", "left"], 1));
