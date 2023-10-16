// 7kyu Bumps in the Road

// Take in string showing either a flat road (_) or  bumps(n)
// Your car is old and can only handle 15 bumps 
// Return "Woohoo!" if bumps < = 15, otherwise return "Car Dead"

// function bump(str) {
//     // iterate over string and check if character is either _ or n.
//     //If n ==> increment bumps count. 
//     let bumpsCount = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'n') {
//             bumpsCount++;
//         }
//     }

//     if (bumpsCount <= 15) {
//         return 'Woohoo!';
//     } else {
//         return 'Car Dead';
//     }
// }

const bump = x => x.split('n').length > 15 ? 'Car Dead':'Woohoo!';

// Examples
console.log(bump('n')); // Woohoo!
console.log(bump('__nn_nnnn__n_n___n____nn__nnn')); // Woohoo!
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn')); // Car Dead