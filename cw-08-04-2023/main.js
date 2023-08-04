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

//console.log(getCount("abracadabra"));


// 6kyu Who Likes it?

function likes(names) {
  names = names || [];
  switch(names.length) {
    case 0: return 'no one likes this';
    case 1: return `${names[0]} likes this`; 
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]}, and ${names.length - 2} others like this`
  }
}


// 6kyu Counting Duplicates
//Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string

function duplicateCount(str){
    let newStr = str.toLowerCase().split('').sort();
    let duplicateCharacters = [];

    for (let i = 0; i < newStr.length; i++) {
        // if the current elem equals the following elem && it's not already in our duplicates array
        if (newStr[i] === newStr[i+1]  && !duplicateCharacters.includes(newStr[i])) {
            duplicateCharacters.push(newStr[i]);
        }
    }
    return duplicateCharacters.length;
}

console.log(duplicateCount("aabbcde"));


// 7kyu Disemvowel Trolls
// Your task is to write a function that takes a string and return a new string with all vowels removed. Y is not a vowel

function disemvowel(str) {
    const vowels = 'aeiou'
    return str
        .split('')
        .filter(letter => !vowels.includes(letter.toLowerCase()))
        .join('');
}


// 7kyu Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let newArr = numbers.split(' ').map(num => parseInt(num, 10)).sort((a,b) => a-b);
    let high = newArr[newArr.length-1].toString();
    let low = newArr[0].toString();
    return `${high} ${low}`;
}

console.log(highAndLow('1 2 3 4 5'))