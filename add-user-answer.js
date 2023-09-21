// 7kyu Add userAnswer to each object in array
// add new property userAnswer to every object in an array and set value to null

var questions = [{
  question: "What's the currency of the USA?",
  choices: ["US dollar", "Ruble", "Horses", "Gold"],
  corAnswer: 0
}, {
  question: "Where was the American Declaration of Independence signed?",
  choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
  corAnswer: 0
}];

function addUserAnswer(questions) {
  questions.forEach(obj => {
    obj.usersAnswer = null;
  })
  return questions;
}

const addUserAnswer = questions => {
  questions.forEach(obj => {
    obj.usersAnswer = null;
  })
  return questions;
}

//addUserAnswer(questions);
console.log(addUserAnswer(questions));


function filterOdds(arr) {
  return arr.filter(x => x % 2 === 0);
}