// Multiplication Table 6kyu
// Your task, is to create N×N multiplication table, of size provided in parameter.

const multiplicationTable = (size) => {
  // size will determine row length as well as num of rows 3 = 3x3, 4 = 4x4, etc.
  // results arr to store each row --> row is represented by an arr
  // row.length = size arg --> upper bound of our for loop
  let timesTable = [];

  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i*j);
    }
    timesTable.push(row);
  }
  return timesTable;
}


//examples
console.log(multiplicationTable(3), [[1,2,3], [2,4,6], [3,6,9]]);
