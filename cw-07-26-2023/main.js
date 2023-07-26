// 7kyu power of four

function powerOf4(n) {
  //true if power of four
  //false if not power of four or not a positive number
    //if (typeof n === 'number' && n > 0) {
        //return (Math.log(n) / Math.log(4)) % 1 === 0;
    //} 
    //return false;
    return Number.isInteger(n) && Number.isInteger(Math.log(n) / Math.log(4));
}



//7kyu Help Suzuki rake his garden
//rake out any items that are not a rock or gravel
//if not a rock or gravel, change to gravel

// function rakeGarden(garden) {
//     let gardenArr = garden.split(' ');
//     for (let i = 0; i < gardenArr.length; i++) {
//         if (gardenArr[i] !== 'rock' && gardenArr[i] !== 'gravel') {
//             gardenArr[i] = 'gravel';
//         }
//     }
//     return gardenArr.join(' ');
// }

function rakeGarden(garden) {
    return garden
    .split(' ')
    .map(elem => elem !== 'rock' && elem !== 'gravel' ? elem = 'gravel' : elem )
    .join(' ');
}

var garden1 = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel';
console.log(rakeGarden(garden1));