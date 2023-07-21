// 7kyu find the capitals 
// Write a function that takes a single string (word) as argument
// The function must return an ordered list containing the indexes of all capital letters in the string

const capitals = word => {
    let lettersArr = word.split('')
    let result = [];

    lettersArr.forEach( (letter, i) => {
        if (letter === letter.toUpperCase()) {
            result.push(i);
        }
    })
    return result;
}

console.log(capitals('CodEWaRs'));