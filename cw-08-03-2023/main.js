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
    let newArr = [];
    let results= [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr.slice(0,i).join(" ")); // first val 0 to i
        newArr.push(arr.slice(i).join(" ")); // second val i onward
        results.push(newArr);
    }

    return results;
}