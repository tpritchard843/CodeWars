// 6kyu Data Reverse
// A stream of data is received and needs to be reversed.
// Each segment is 8 bits long, meaning the order of these segments needs to be reversed
// 11111111  00000000  00001111  10101010 --> 10101010  00001111  00000000  11111111
// The total number of bits will always be a multiple of 8.
// Input example: [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]

function dataReverse(data) {
  const bytes = [];
  // since there is no requirement to edit in place, we will use a separate bytes array to store each byte
  // using a while loop allows us to decrement by 8 each time through, which will break the loop when the data array is empty
  while (data.length) {
    // each byte is 8 bits long so this is the value we will reverse by
    bytes.push(...data.splice(-8)); // splices 8 bits' values off the end of data and pushes them to the bytes array
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
