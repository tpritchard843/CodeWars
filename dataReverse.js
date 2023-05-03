// 6kyu Data Reverse
// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed
// 11111111  00000000  00001111  10101010 --> 10101010  00001111  00000000  11111111
// The total number of bits will always be a multiple of 8.
// Input example: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  const bytes = [];
  // use while loop on array with splice to decrement by byte size of 8
  while (data.length) {
    // take the 8 bits off the end of the array and push them to the front of the array
    // the spread operator spreads in just the values
    bytes.push(...data.splice(-8));
  }
  return bytes;
}

//examples
const data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0];
const data2 = [1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1];
console.log(dataReverse(data1),data2);

const data3 = [0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1];
const data4 = [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0];
console.log(dataReverse(data3),data4);
