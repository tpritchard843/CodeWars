// 8kyu needle in a haystack

const findNeedle = haystack => `found the needle at position ${haystack.indexOf('needle')}`;


//console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));


// 6kyu needles in a haystack

// Find the needle(s) in a haystack by creating a function that returns all properties (recursively) which contains the needle (string).
// Return value should be a sorted array

function search(haystack, needle, path) {
    let result = [];
    path = path || [];

    if (typeof haystack === 'string') {
        if (haystack.indexOf(needle) !== -1) {
            result = [ path.join('.') ];
            //console.log(result)
        }
    } else if (typeof haystack === 'object') {
        for (let key in haystack) {
            result = result.concat( search( haystack[key], needle, path.concat([key]) ) );
        }
    }

    return path.length ? result : result.sort();
}

const obj = {
    site: "Codewars",
    description: "Lorem ipsum dolor sit...",
    obj2: {
    str: "Yeah, Codewars!",
    num: 123,
    obj3: {
        something: "Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff"
      }
    },
    surprise: "Ha! Codewars :)",
    nullProperty: null
  }

console.log(search(obj,"Codewars"))

//console.log(search("Ph'nglui mglw'nafh Codewars R'lyeh wgah'nagl fhtagn. Gotha fm'latgh h'gof'nn, geb chtenff", "Codewars"))