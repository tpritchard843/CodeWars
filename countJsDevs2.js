// Count the number of Javascript developers coming from europe
// Return the number of Javascript developers coming in from Europe

// Take in array of objects
// All data will be valid and uniform
// The format of the strings will always be 'Europe' and 'JavaScript'

// loop through each object in the list
// check the values of the contintent and language property on each for the corresponding queries
// filter for the objects that match the conditional and return the number of these objects

const countDevelopers = developers => developers.filter(person => person.continent === 'Europe' && person.language === 'JavaScript').length;


// Examples
const list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];

const list2 = [
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 19, language: 'HTML' },
  { firstName: 'Lukas', lastName: 'R.', country: 'Austria', continent: 'Europe', age: 89, language: 'HTML' }
];


console.log(europeanDevCount(list1)); // 1
console.log(europeanDevCount(list2)); // 0
