// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3

const frequentNumber = numberArray => {
    // 1. store array element in a obj with the number count
    let numberCountObj = {}
    numberArray.map(singleNumber => {

        // store in obj logic 
        if (numberCountObj[singleNumber] === undefined) {
            numberCountObj[singleNumber] = 1
        } else {
            numberCountObj[singleNumber] += 1
        }
    })

    let result = 0;

    //2. find most frequent number in this obj 
    for (const frequent in numberCountObj) {
        if (result < numberCountObj[frequent]) {
            result = numberCountObj[frequent]
        }

    }
    return result
}

const array = [3, 5, 2, 5, 3, 3, 1, 4, 4, 4, 4, 5];
const result = frequentNumber(array)
console.log(result);