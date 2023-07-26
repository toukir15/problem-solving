// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

const sumOfPositiveNumber = numberArray => {
    let positiveTotal = 0;
    numberArray.map(singleNumber => {
        if (singleNumber >= 0) {
            positiveTotal += singleNumber
        }
    })
    return positiveTotal
}

const array = [2, -5, 10, -3, 7]
const result = sumOfPositiveNumber(array)
console.log(result);