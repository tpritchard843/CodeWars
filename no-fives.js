// 7kyu Don't give me five

//In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it
//Start and end number are both inclusive

function dontGiveMeFive(start, end) {
    let count = 0;
    for (let i = start; i < end + 1; i++) {
      if (!i.toString().includes('5')) {
        count++;
      }
    }
    return count;
}

console.log(dontGiveMeFive(1,9));