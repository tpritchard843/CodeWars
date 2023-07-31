//7kyu Fast cooking pancakes

// return minimum time (intervals of 1) needed to cook n pancakes with m num of pancakes that can fit in the pan
//each pancake needs 1 minute per side

function cookPancakes(n,m) {
    return n < m ? 2 : Math.ceil((n*2) / m);
}