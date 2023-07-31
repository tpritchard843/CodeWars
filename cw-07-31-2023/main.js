//7kyu Fast cooking pancakes

// return minimum time (intervals of 1) needed to cook n pancakes with m num of pancakes that can fit in the pan
//each pancake needs 1 minute per side

// function cookPancakes(n,m) {
//     return n < m ? 2 : Math.ceil((n * 2) / m);
// }

const cookTime = (n,m) => n < m ? 2 : Math.ceil((n * 2) / m);


// 7kyu Maximum Multiple

function maxMultiple(divisor, bound){
    // console.log(bound % divisor);
    return bound - bound % divisor; //subtract remainder from bound to get our highest multiple
}

console.log(maxMultiple(37, 200)); // 185

// 7kyu Sort Numbers
// if nums is truthy, that is to say not falsy/null, return sorted arr. Else return an empty array.
const solution = nums => nums ? nums.sort((a,b) => a-b) : [];


//8kyu Lario and Muigi Pipe Problem

function pipeFix(numbers){
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    let val = min;
    while (val < max) {
        if (!numbers.includes(val)) {
            numbers.push(val);
        }
        val++
    }
    return numbers.sort((a,b) => a-b);
}

//console.log(pipeFix([1,2,3,5,6,8,9]));