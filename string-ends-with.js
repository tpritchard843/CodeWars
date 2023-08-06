// 7kyu String ends with?
//PREP
//Return true if the first argument passed in as a string ends with the second arg passed in

// const solution = (str, ending) => str.slice(-ending.length) === ending || ending === '';
const solution = (str, ending) => str.endsWith(ending);

//Examples 
console.log(solution('abc', 'bc')); //true
console.log(solution('abc', 'd')); //false
console.log(solution('abc', '')); //true

