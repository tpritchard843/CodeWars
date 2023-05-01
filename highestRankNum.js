// 6kyu Highest Rank Number in an Array
// Complete the method which returns the number which is most frequent in the given input array.
// If there is a tie for most frequent number, return the largest number among them.
// Note: no empty arrays will be given.

function highestRank(arr){
  // create a map object to house key-value pairs for each number and its count
  let map = {};
  // loop through array and increment value for each key
  arr.forEach(num => {
    map[num] ? map[num]++ : map[num] = 1;
  });
  // return map value with the highest count, choosing the higher key if counts are equal
  // use Object.keys and the reduce function
  return Number(Object.keys(map).reduce((a,b) => map[a] > map[b] ? a : b));
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
console.log(highestRank(arr), 12);
