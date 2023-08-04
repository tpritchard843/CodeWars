// CW String Challenges Ladder

// 8kyu convert a number to a string

function numberToString(num) {
    return String(num);
    //return num.toString();
}


// 7kyu Vowel Count

function getCount(str) {
    let count = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(getCount("abracadabra"));