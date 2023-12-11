// Bumps in the road -- 7kyu second go through
// Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.
// Given a string showing either flat road (_) or bumps (n)
// If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

// const bump = str => str.split('n').length > 16 ? 'Car Dead' : 'Woohoo!';

//examples
console.log(bump("n"), "Woohoo!");
console.log(bump("__nn_nnnn__n_n___n____nn__nnn"), "Woohoo!");
console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"), "Woohoo!");
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"), "Car Dead");
console.log(bump("______n___n_"), "Woohoo!");


const bump = str => str.split('n').length > 16 ? 'Car Dead' : 'Woohoo!';
