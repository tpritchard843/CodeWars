//7kyu Get the middle character

function getMiddle(str) {
    return str.slice((str.length -1) / 2, str.length / 2 + 1);
}

console.log(getMiddle('testing'))
console.log(getMiddle('test'))



// 6kyu spin words 

const spinWords = string => string.split(" ").map(word => word.length < 5 ? word : [...word].reverse().join("")).join(" ");
//spread operator spreads each letter into an array, allowing us to reverse the word. Works similarly to .split() in this context

console.log(spinWords("Hey fellow warriors"));