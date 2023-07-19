// your code here
// 7kyu transpose two strings in an array
function transposeTwoStrings (arr) {
    let result = []
    let longestStr = Math.max(arr[0].length, arr[1].length)

    for (let i = 0; i < longestStr; i++) {
        let row = (arr[0][i] || ' ') + ' ' + (arr[1][i] || ' ')
        result.push(row)
    }
    return result.join('\n')
}

console.log(transposeTwoStrings(['joey', 'louise']))


// 7kyu Tube strike options calculator
function calculator(distance, busDrive, busWalk)  {
    let walkTime = (distance / 5)
    let busTime = ((busDrive / 8) + (busWalk / 5))

    if (walkTime < 1/6) return 'Walk'
    if (walkTime > 2) return 'Bus'

    return walkTime <= busTime ? 'Walk' : 'Bus'
}

console.log(calculator(5,6,1))
console.log(calculator(5,8,0))
console.log(calculator(0.6, 0.4, 0))