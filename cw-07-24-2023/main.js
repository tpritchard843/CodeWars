// your code here
// "Center yourself", says the monk 7kyu

function center (string, width, fill = ' ') {
    if (string.length >= width) return string;
    let rightFill = fill.repeat(Math.floor((width -string.length) / 2));
    let leftFill = fill.repeat(Math.floor((width -string.length) / 2));

    return leftFill + string + rightFill;
}
  
console.log(center('abc', 10, '_'));