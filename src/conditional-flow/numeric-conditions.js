// TODO: Implement the functions below to make the tests pass

// This function should return 0 if there are no elements in the array, if there are 5 return 1, otherwise return 10

function isArrayEmpty (array) {
  if (array.length === 0) {
    return true 
  } else {
    return false
  }
}

// This function should return true if num1 is greater than num2, false otherwise
function isGreaterThan (num1, num2) {
  if (num1 > num2) {
    return true
  } else {
    return false
  }
}

// This function should return the lowest number in the passed array
// example nums array [10, 5, 10, 15, 3, 13]
function findLowest (nums) {
  let lowestNumber = nums[0] 

  for (let i = 0; i < nums.length; i++) {
    let currentNumber = nums[i]

    if (currentNumber < lowestNumber) {
      lowestNumber = currentNumber
    }
  }

  return lowestNumber
}

module.exports = {
  a: isArrayEmpty,
  b: isGreaterThan,
  c: findLowest
}
