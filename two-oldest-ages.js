function twoOldestAges(ages){
    let sorted = ages.sort((a,b) => b-a);
    return [sorted[1], sorted[0]];
}
