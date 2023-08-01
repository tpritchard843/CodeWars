// 8kyu needle in a haystack

function findNeedle(haystack) {
    if (haystack.some(elem => elem === 'needle')) {
      return `found the needle at position ${haystack.indexOf('needle')}`
    }
    return "Your function didn't return anything"
  }

console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))