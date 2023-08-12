// 7kyu Complementary DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.

function DNAStrand(dna){
    let result = '';
    //loop through each letter in the string of DNA and switch to the compliment
    for (let i = 0; i < dna.length; i++) {
        let elem = dna[i];
        switch(elem) {
            case 'A': {elem ='T'; break;}
            case 'T': {elem ='A'; break;}
            case 'C': {elem='G'; break;}
            case 'G': {elem='C'; break;}
        }
        result += elem;
    }
    return result;
}


// Examples
console.log(DNAStrand("AAAA")); //TTTT
console.log(DNAStrand("ATTGC")); //TAACG