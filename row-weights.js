// 7kyu Row weights
// Take in an array of positive ints representing the weights of people
// Split into two teams: evens team 1 and odds are team 2
// return a new array with two integers, total weight of team 1 and total weight of team 2

function rowWeights(arr){
  let results = [0, 0];
  // loop through arr and check if index is even or odd
  // even index gets added to team1 and odd to team2
  for (let i = 0; i < arr.length; i++) {
    i % 2 === 0 ? results[0] += arr[i] : results[1] += arr[i];
  }

  return results;
}

// Examples
console.log(rowWeights([80])); // [80, 0]
console.log(rowWeights([50,60,70,80])); // [120,140]
console.log(rowWeights([70,58,75,34,91])); // [236,92]