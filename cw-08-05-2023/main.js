//7kyu Get the middle character

function getMiddle(str) {
    return str.slice((str.length -1) / 2, str.length / 2 + 1);
}

console.log(getMiddle('testing'))
console.log(getMiddle('test'))



// 6kyu spin words 

const spinWords = string => string.split(" ").map(char => char.length < 5 ? char : [...char].reverse().join("")).join(" ");

console.log(spinWords("Hey fellow warriors"));