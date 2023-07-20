// 7kyu Alphabet symmetry

/* function solve(arr){  
    //for each word in the array, return the number of letters that occupy the same position as they do in the alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return arr.map( word => word.toLowerCase().split('').filter( (y, i) => y == alphabet[i]).length);
}; */

function solve(arr) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];

    //first for loop runs through each word in our initial array
    for (let i = 0; i < arr.length; i++) {
        let count = 0; // count variable to keep track of letters in correct position for each word in the initial array
        // loop through the characters of the word
        for (let j = 0; j < arr[i].length; j++) {
            // if character matches the correct position in the alphabet, increment the count
            if (arr[i][j].toLowerCase() == alphabet[j]) {
                count++;
            }
        }
        //push the count of correct letters for each word to the result array
        result.push(count);
    }
    return result;
}

console.log(solve(["abode","ABc","xyzD"]))