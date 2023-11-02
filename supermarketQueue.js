// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

//Inputs:
  // customer: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
  // n: a positive integer, the number of checkout tills.

// return an interger that represents the total time required

function queueTime(customers, n) {
  // Make an array containing n amount of elements,
  // n representing the number of tills,
  let tills = Array(n).fill(0);

  // Iterate through the customers
  customers.forEach(customer => {
    // Find the till that has the least time
    let nextTill = tills.indexOf(Math.min(...tills))
    // Add the time, representing the customer to
    // the till that has the least time
    tills[nextTill] += customer;
  })

  // Return the till that has the longest wait time
  // This is the required time to get all customers
  // through the que.
  return Math.max(...tills);
}

//examples
console.log(queueTime([5,3,4], 1), 12);
console.log(queueTime([10,2,3,3], 2), 10);
console.log(queueTime([2,3,10], 2), 12);
console.log(queueTime([12,5,8,4,5,6], 2));
