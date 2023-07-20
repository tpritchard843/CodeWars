// 7kyu Alphabet symmetry

/* function solve(arr){  
    //for each word in the array, return the number of letters that occupy the same position as they do in the alphabet
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    return arr.map( word => word.toLowerCase().split('').filter( (y, i) => y == alphabet[i]).length);
}; */



console.log(solve(["abode","ABc","xyzD"]))