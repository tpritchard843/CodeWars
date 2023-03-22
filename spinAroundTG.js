// Take in an array with directions
// each array item is a string -- either 'left' or 'right', no funny biz
// right increments degrees by 90, and left decrements by 90.
// 360 degrees is a circle
// calculate how many rotations it makes & return a positive number

function spinAround(turns) {
  // iterate through turns
  // check if right or left
  // calculate total degrees and divide by 360
  // round down to nearest whole num
  // returning 1 value ==> use reduce
  return Math.abs(Math.floor(turns.reduce((sum, v) => v === 'right' ? sum + 90 : sum - 90, 0)/360));
}

//examples

console.log(spinAround(["left", "right", "left", "right"], 0)); // 0
console.log(spinAround(["right", "right", "right", "right", "right", "right", "right", "right"], 2));
console.log(spinAround(["left", "left", "left", "left"], 1));
