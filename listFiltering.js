// List Filtering 7kyu

// takes a list of non-negative integers and strings -- no funny biz
// returns a new list with the strings filtered out

// function filter_list(list) {
//   // loop through list using and filter by typeof === number
//   // because it wants a new array, we will make a copy using slice, then run our filter
//   return list.slice().filter(x => typeof x === 'number');
// }

const filteredList = list => list.slice().filter(x => typeof x === 'number');

// examples
console.log(filteredList([1,2,'a','b']),[1,2]);
console.log(filteredList([1,'a','b',0,15]),[1,0,15]);
console.log(filteredList([1,2,'aasf','1','123',123]),[1,2,123]);
