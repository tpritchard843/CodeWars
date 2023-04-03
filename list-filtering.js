// List Filtering 7kyu

// takes a list of non-negative integers and strings -- no funny biz
// returns a new list with the strings filtered out

// const filteredList = (list) => {
//   // new list --> copy array
//   //filter over list
//   // check for type number
//   return list.slice().filter(val => typeof val === 'number');
// }

const filteredList = list => list.slice().filter(val => typeof val === 'number');

//Examples
console.log(filteredList([1,2,'a','b']),[1,2]);
console.log(filteredList([1,'a','b',0,15]),[1,0,15]);
console.log(filteredList([1,2,'aasf','1','123',123]),[1,2,123]);
