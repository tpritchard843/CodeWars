// 6kyu Sort the odd
// Sort the odd numbers in ascending order and leave the evens in their original positions

function sortArray(array) {
    const odds = array
        .filter(x => x % 2) // x % 2 is truthy if it returns a value that isn't 0. This implies it is an odd number
        .sort((a,b) => a -b)

    return array.map(x => x % 2 ? odds.shift() : x); 
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));