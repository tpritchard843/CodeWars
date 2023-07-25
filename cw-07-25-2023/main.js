// 7kyu Training Time
function shuffleIt(arr, ...swaps) {
    for (let swap of swaps) {
        var [a, b] = swap;
        [arr[a], arr[b]] = [arr[b], arr[a]];
    }
    return arr;
}

//console.log(shuffleIt([1,2,3,4,5],[1,2])) // returns [1,3,2,4,5] 

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

//console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0]));



//7kyu two numbers are positive
// write a function which takes in three integers and returns true if two of them are positive
function twoArePositive(a, b, c) {
    return [...arguments].filter(elem => elem > 0).length === 2;
}

//console.log(twoArePositive(2, 4, -3)); // true



//Page replacement algorithms: FIFO 7kyu
// function fifo(n, referenceList) {
//     let result = [];
//     let lastIndex = 0;
//     for (let i = 0; i < referenceList.length; i++) {
//         if (i < n) {
//             result.push(referenceList[i]);
//         } else if (i >= n) {
//             if (result[lastIndex] === referenceList[i]) {
//                 lastIndex++
//             }
//             result[lastIndex] = referenceList[i];
//             lastIndex++;
//         }
//     }

//     return result;
// }

function fifo(n, referenceList) {
    const result = new Array(n).fill(-1);
    let oldestIndex = 0;
    for (let val of referenceList) {
        //if results arr does not include the value at index i in the reference list
        if (!result.includes(val)) {
            result[oldestIndex] = val;
            oldestIndex = (oldestIndex + 1) % n;
        }
    }
    return result;
}

//fifo(3, [1,2,3,4,5])
fifo(4, [1, 2, 3, 3, 4, 5, 1]) // [5,1,3,4]