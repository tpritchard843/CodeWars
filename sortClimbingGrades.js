// 7kyu Sort the Climbing grades
// climbing grades start at 'VB' (the easiest grade), and then go 'V0', 'V0+', 'V1', 'V2', 'V3', 'V4', 'V5' etc. up to 'V17' (the hardest grade)
// ou will be given a list (lst) of climbing grades and you have to write a function (sort_grades) to return a list of the grades sorted easiest to hardest.
// If the input is an empty list, return an empty list; otherwise the input will always be a valid list of one or more grades.

function sortGrades(list){
  // create variable containing grades in order
  const grades = ["VB", "V0", "V0+", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13", "V14", "V15", "V16", "V17"];
  // sort the list using the indices of grades list
  return list.sort((a,b) => grades.indexOf(a) - grades.indexOf(b));
}

console.log(sortGrades(["V7", "V12", "V1"]), ["V1", "V7", "V12"]);
console.log(sortGrades(["V13", "V14", "VB", "V0"]), ["VB", "V0", "V13", "V14"]);
console.log(sortGrades(["V0+", "V0", "V16", "V2", "VB", "V6"]), ["VB", "V0", "V0+", "V2", "V6", "V16"]);
console.log(sortGrades(["V7"]), ["V7"]);
console.log(sortGrades([]), []);
