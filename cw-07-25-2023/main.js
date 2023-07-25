// 7kyu Training Time
function shuffleIt(arr, ...swaps) {
    for (let swap of swaps) {
        var [a, b] = swap;
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}

console.log(shuffleIt([1,2,3,4,5],[1,2])) // returns [1,3,2,4,5] 