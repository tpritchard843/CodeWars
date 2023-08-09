function high(str){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let words = str.split(' ');
    let highestScore = 0;
    let result = '';
    for (let word of words) {
        let score = 0;
        for (let letter of word) {
            score += alphabet.indexOf(letter) + 1;
        }

        if (score > highestScore) {
            highestScore = score;
            result = word;
        }
    }

    return result;
}

console.log(high('man i need a taxi up to ubud'));