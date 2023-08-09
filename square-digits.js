// 7kyu Square every digit

function squareDigits(num){
    return parseInt(num.toString().split('').map(x => x ** 2).join(''));
}