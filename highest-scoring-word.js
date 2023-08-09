function high(str){
    // let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // let words = str.split(' ');
    // let highestScore = 0;
    // let result = '';
    // for (let word of words) {
    //     let score = 0;
    //     for (let letter of word) {
    //         score += alphabet.indexOf(letter) + 1;
    //     }

    //     if (score > highestScore) {
    //         highestScore = score;
    //         result = word;
    //     }
    // }

    // return result;

    let words = str.split(' ');
    let scores = words.map(word => [...word].reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0)) // for each word it finds the sum of ASCII value of each letter of the word by subtracting 96 from the charCodeAt(0) of the character of the word.
    return words[scores.indexOf(Math.max(...scores))];
}

console.log(high('man i need a taxi up to ubud'));