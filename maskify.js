// 7kyu Credit Card Mask
// PREP
// Take in a credit card number as a param
// Mask all digits with a # except for the last 4 digits

function maskify(cc) {
  // return cc argument
  //if length > 4, modify the cc num by replacing all but last 4 digits with #
  if (cc.length > 4) {
    let ccSubstring = [...cc.slice(0, cc.length -4)].map(c => c = '#');
    let lastFour = cc.slice(-4);
    let maskedNum = ccSubstring.join('') + lastFour;
    return maskedNum;
  }
  return cc;
}

// Examples 
console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // 1
console.log(maskify('11111')); //#1111
