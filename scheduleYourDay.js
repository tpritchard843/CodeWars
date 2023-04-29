// SCHEDULE YOUR DA(RRA)Y
// Given the following three inputs, please create an array of time alloted to work, broken up with time alloted with breaks:

  // Input 1: Hours - Number of hours available to you to get your work done!
  // Input 2: Tasks - How many tasks you have to do througout the day
  // Input 3: Duration (minutes)- How long each of your tasks will take to complete

// Criteria to bear in mind:

  // Your schedule should start with work and end with work.
  // It should also be in minutes, rounded to the nearest whole minute.
  // If your work is going to take more time than you have, return "You're not sleeping tonight!"

// function dayPlan (hours, tasks, duration){
//   // tally total time spent performing tasks
//   let timeWorking = (tasks * duration) / 60;
//   let schedule = [];
//   // check for first condition --> too much work
//   if (timeWorking > hours ) return 'You\'re not sleeping tonight!';
//   // total time - time spent performing tasks determines leisure time.
//   let breakTime = (hours - timeWorking) * 60;
//   let breaks = tasks -1;
//   let breakDuration = Math.round(breakTime / breaks);
//   // alternate schedule between tasks and breaks
//   while (breaks > 0) {
//     schedule.push(duration, breakDuration);
//     breaks--;
//   }
//   schedule.push(duration);
//   return schedule;
// }

const dayPlan = (hours, tasks, duration) =>
  duration * tasks > hours * 60 ? `You're not sleeping tonight!` :
    [...Array(2 * tasks - 1)].map((_, idx) => idx & 1 ? Math.round((hours * 60 - duration * tasks) / (tasks - 1)) : duration);

//examples
console.log(dayPlan(8, 5, 30), [ 30, 83, 30, 83, 30, 83, 30, 83, 30 ]);
console.log(dayPlan(2,2,60), [ 60, 0, 60 ]);
console.log(dayPlan(3,5,60), 'You\'re not sleeping tonight!');
