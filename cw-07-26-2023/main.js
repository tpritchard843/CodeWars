// 7kyu power of four

function powerOf4(n) {
  //true if power of four
  //false if not power of four or not a positive number
    //if (typeof n === 'number' && n > 0) {
        //return (Math.log(n) / Math.log(4)) % 1 === 0;
    //} 
    //return false;
    return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4));
}