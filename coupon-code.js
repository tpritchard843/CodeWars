// 7kyu The Coupon Code
// Write a function that verifies a coupon code is valid and not expired
// Params: enteredCode, correctCode, currentDate, expirationDate
// Code must match a valid code
// Code date expires the day after exp date. date format will be  "MONTH DATE, YEAR"


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  // check to see if code matches correct code
  // check if current date is not > than expDate
  return enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate);
}



// Examples
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')); // true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')); // false
