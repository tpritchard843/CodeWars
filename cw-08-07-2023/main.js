// 7kyu The Highest Profit wins
function minMax(arr){
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);
    return [min,max]; // fix me!
}

console.log(minMax([1,2,3,4,5]));