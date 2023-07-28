// 7kyu Suzuki needs help lining up his students
// sort students by the length of their names in descending order
// if equal length, sort Z -> A

const sortedStudents = students => {
    return students
    .trim()
    .split(' ')
    .sort((a, b) => b.length - a.length || b.localeCompare(a));
}

/* The localeCompare() method returns a number indicating whether 
   the string comes before, after or is equal as the compareString 
   in sort order. Handles our reverse alphabetical sorting if needed.
 */
