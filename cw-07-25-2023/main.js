// 7kyu Training Time
function shuffleIt(arr, ...swaps) {
    for (let swap of swaps) {
        var [a, b] = swap;
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}

console.log(shuffleIt([1,2,3,4,5],[1,2])) // returns [1,3,2,4,5] 

// 7kyu Tram capacity
function tram(stops, descending, onboarding){
    let max = 0;
    let passengers = 0;
    for (let i =0; i < stops; i++) {
        // track number of passengers at each stop
        passengers += onboarding[i] - descending[i];
        //if current max capacity is less than the updated passengers count, set that as the new max
        if (max < passengers) {
            max = passengers;
        }
    }
    return max; // return max capacity
}

console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0]));