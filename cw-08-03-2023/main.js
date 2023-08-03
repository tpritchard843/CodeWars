// 7kyu Building Blocks (OOP)
// Write a class Block that creates a block

class Block{
    constructor(arr){
        this.w = arr[0];
        this.l = arr[1];
        this.h = arr[2];
      }
      getWidth() {
        return this.w;
      }
      getLength() {
        return this.l;
      }
      getHeight() {
        return this.h;
      }
      getVolume() {
        return this.l * this.w * this.h;
      }
      getSurfaceArea() {
        let {l, w, h} = this;
        return 2 * (l*w + l*h + w*h);
  }
}


// 7kyu Parts of a list (arrays)
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.
// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
    let newArr;
    let results= [];
    for (let i = 1; i < arr.length; i++) {
        newArr = []; // newArr should be empty at the start of each iteration, which will give us the unique outcomes for the results arr
        newArr.push(arr.slice(0,i).join(" ")); // first val 0 to i
        newArr.push(arr.slice(i).join(" ")); // second val i onward
        results.push(newArr);
    }

    return results;
}


// 7kyu Ones and Zeros

//arr.join converts binary arr to a string. parseInt converts that string to an integer using base 2 (binary)
const binaryArrayToNumber = arr => parseInt(arr.join(""), 2);


//console.log(binaryArrayToNumber([0,0,0,1]));
//console.log(binaryArrayToNumber([1,1,1,1]));


//6kyu Array.diff
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

function arrayDiff(a, b) {
  return a.filter(val => !b.includes(val));
}

//console.log(arrayDiff([1,2,2], [2]));


// 6kyu Multiples of 3 or 5

function solution(number){
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10))