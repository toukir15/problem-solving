// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function secondSmallestFN(array) {
    const sortedArray = array.sort()
    const secondSmallest = sortedArray[1]
    return secondSmallest;
}

const array = [5, 8, 4, 3, 6]
console.log(secondSmallestFN(array));
