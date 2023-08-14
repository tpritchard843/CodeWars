// Your code here

const getMilitaryTime = function(input) {
    const hour = input.substr(0, 2);
    const mins = input.substr(3, 2);
    const secs = input.substr(6, 2);
    const ampm = input.substr(-2, 2);

    if (hour === '12' && ampm === 'AM')
        return `00:${mins}:${secs}`;
    else if (hour !== '12' && ampm === 'PM')
        return `${parseInt(hour) + 12}:${mins}:${secs}`;
    else
        return `${hour}:${mins}:${secs}`;
};

console.log(getMilitaryTime('12:00:01AM'));