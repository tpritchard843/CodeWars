// 7kyu Greet me
// take in a name as a string & return a greeting "Hello Name!" with the first letter of name capitalized
// Name could be all lowercase or all uppercase, and must be formatted correctly in the return string

var greet = function(name) {
  // convert name to correct format with just the first letter capitalized
  // return "Hello name!" as a template literal
  let formattedName = name.split('').map((char, i) => i === 0 ? char.toUpperCase() : char.toLowerCase()).join('');
  return `Hello ${formattedName}!`;
};

// examples
console.log(greet('riley')); // Hello Riley!
console.log(greet('JACK')); // Hello Jack!
