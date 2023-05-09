// fizzBuzz
// print numbers from 1 to 100
// Multiples of 3 should print Fizz
// Multiples of 5 should print Buzz
// Multiples of 3 and 5 should print FizzBuzz

// function fizzBuzz() {
//   // loop to print numbers to the console
//   for (let i= 1; i < 101; i++) {
//     // check for FizzBuzz condition first
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('FizzBuzz');
//     }
//     // check for multiples of 3
//     else if (i % 3 === 0) {
//       console.log('Fizz');
//     }
//     // check for multiples of 5
//     else if (i % 5 === 0) {
//       console.log('Buzz');
//     }
//     else console.log(i);
//   }
// }

function fizzBuzz() {
  for (let i= 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    }else if (i % 3 === 0) {
      console.log('Fizz');
    }else if (i % 5 === 0) {
      console.log('Buzz');
    }
    else console.log(i);
  }
}

fizzBuzz();
