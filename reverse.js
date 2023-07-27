// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"


function reverseString(inputStr) {
    let reverseStr = ""
    for (let i = inputStr.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + inputStr.charAt(i)
    }
    console.log(reverseStr);
}

const string = "sdfldjsortjwe9ior"
const result = reverseString(string);
console.log(result);












