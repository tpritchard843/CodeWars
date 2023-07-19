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