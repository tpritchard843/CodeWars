// FIZZBUZZ
// take in a number
// Print numbers 1 through n... n % 3 Fizz, n % 5 buzz, n % 3 && n %5 Fizzbuzz

function fizzbuzz(n) {
  let result = [];
  for (let i = 1; i < n + 1; i ++) {
    if (i % 3 === 0 && i % 5 ===0) {result.push('FizzBuzz')} 
    else if (i % 3 === 0) {result.push('Fizz')} 
    else if (i % 5 === 0) {result.push('Buzz')} 
    else {result.push(i)}
  }
  return result;
}