// function myLanguages(results) {
//   let myLanguages = [];
//   for (let language in results) {
//       myLanguages.push([language, results[language]]);
//   }
//   myLanguages = myLanguages.sort((a,b) => b[1] - a[1]).filter(language => language[1] >= 60);
//   return myLanguages.map(language => language[0]);
// }

// function myLanguages(results) {
//   return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
// }

const myLanguages = results => Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
