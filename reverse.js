
// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Example Input: "hello world" Example Output: "dlrow olleh"

const reverse = string => {
    const reverseString = string.split("").reverse().join("")
    return reverseString;
}

const string = "hello world"
const result = reverse(string)
console.log(result);










