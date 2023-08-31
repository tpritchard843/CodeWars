// 6kyu Which are in?
// Take in two arrays of strings a1 & a2
// return sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2


// loop through each item in a1 and filter for those a1 strings that are included (substrs) in a2
// will also have to loop through each a2 item to check for that condition
const inArray = (a1,a2) => a1.filter((sub) => a2.some((whole) => whole.includes(sub))).sort();

// examples
console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])); // ["live", "strong"]
console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"])); // ["arp", "live", "strong"]
console.log(inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"])); // []
