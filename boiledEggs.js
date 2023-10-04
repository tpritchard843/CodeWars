// 7kyu Boiled Eggs

// Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
// you can put at most 8 eggs into the pot at once
// it takes 5 minutes to boil an egg
// we assume, that the water is boiling all the time (no time to heat up)
// for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

const cookingTime = (eggs) => {
  // Check if eggs > 8
  // divide eggs by 8 and round up to nearest whole num. Multiply that by two
  let batches = Math.ceil(eggs / 8);
  return batches * 5;
}

// examples
console.log(cookingTime(0)); // 0
console.log(cookingTime(5)); // 5
console.log(cookingTime(10)); // 10
console.log(cookingTime(18)); // 15
