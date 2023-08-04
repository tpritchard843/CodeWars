// CW String Challenges Ladder

// 8kyu convert a number to a string

function numberToString(num) {
    return String(num);
    //return num.toString();
}


// 7kyu Vowel Count

function getCount(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').filter(char => vowels.includes(char)).length;
}

console.log(getCount("abracadabra"));