// 7kyu Check the exam
// Take in two arrays as params, 1st arr is the answer key, 2nd arr is the student's scores
// +4 for correct answers, -1 for incorrect, and +0 for blank answer

function checkExam(key, test) {
  //loop through answers array
  // for each answer, compare with key answer of the same index
  // increment score
  let score = 0;
  for (let i = 0; i < test.length; i++) {
    let answer = test[i];
    if (answer === key[i]) {score += 4}
    else if (answer === "") {score += 0}
    else if (answer !== key[i]) {score -= 1};
  }
 //return score
  if (score < 0) {return 0};
  return score;
}


//examples
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // returns 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""])); // returns 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // returns 16