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