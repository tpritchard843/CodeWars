// Spin Around, Touch the Ground (7kyu)
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// function spinAround(turns) {
//   return Math.floor(Math.abs(turns.reduce((sum, c) => c === 'right' ? sum + 90 : sum - 90, 0) / 360));
// }

const spins = turns => Math.floor(Math.abs(turns.reduce((sum, c) => c === 'right' ? sum + 90 : sum - 90, 0) / 360));
