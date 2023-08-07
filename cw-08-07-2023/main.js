// 7kyu The Highest Profit wins
function minMax(arr){
    return [(Math.min(...arr)), Math.max(...arr)];
}

console.log(minMax([1,2,3,4,5]));


// 6kyu Equal Sides of an Array

function findEvenIndex(arr) {
    let left = 0; 
    let right = arr.reduce((acc, c) => acc + c, 0);

    for (let i = 0; i < arr.length; i++) {
        right -= arr[i];
        if (left == right) return i;
        left += arr[i];
    }
    return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])); // index 3
//right 15, != 0 --> left + 1
//right 13, != 1 --> left + 2 = 3
//right 10, != 3 --> left + 3 = 6
// right 6 == left 6 --> return index 3