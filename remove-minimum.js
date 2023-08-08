// 7kyu Remove the minimum without mutation

function removeSmallest(numbers) {
    if (numbers.length === 0) {
        return [];
    }
    let rankings = [...numbers];
    let minIndex = rankings.indexOf(Math.min(...rankings));
    rankings.splice(minIndex, 1);
    return rankings;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));