function getMiddle(str) {
    let lettersArr = str.split('');
    console.log(lettersArr);
  if (str.length % 2 === 0) {
    let firstHalf = lettersArr.slice(0, Math.ceil(lettersArr.length / 2));
    let secondHalf = lettersArr.slice(Math.ceil(lettersArr.length / 2));
    return firstHalf[firstHalf.length - 1] + secondHalf[0];
  } else {
    return lettersArr[(lettersArr.length - 1) / 2]
  }
}

console.log(getMiddle('testing'))
console.log(getMiddle('test'))