// 7kyu Jaden Casing Strings
// capitalize the first letter in every word

String.prototype.toJadenCase = function() {
    let wordsArr = this.split(' ');

    for (let i = 0; i < wordsArr.length; i++) {
        wordsArr[i] = wordsArr[i].charAt(0).toUpperCase() + wordsArr[i].slice(1);
    }

    return wordsArr.join(' ');
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())
//str.toJadenCase()