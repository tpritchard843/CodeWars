// 7kyu Jaden Casing Strings
// capitalize the first letter in every word

String.prototype.toJadenCase = function() {
    return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
//console.log(str.toJadenCase());



// 7kyu Keep the order

function keepOrder(arr, val) {
    //return the index at which val can be inserted whilst maintaining the sorted order of the arr
    return arr.filter(x => x < val).length;
}

console.log(keepOrder([1, 2, 3, 4, 7], 5)) // i = 4
console.log(keepOrder([1, 2, 3, 4], -1)) // i = 0



//convert a number into an array of digits and reverse the order

const converted = n => Array.from(String(n), Number).reverse();
//String converts n to a string for each digit, then Number converts those digits to numbers
//array of numbers is then reversed

console.log(converted(5478))