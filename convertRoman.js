// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function covertRomanToNumber(num) {
    const romanNumber = {

        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let roman = '';
    for (const key in romanNumber) {
        while (num >= romanNumber[key]) {
            roman += key;
            num -= romanNumber[key]
        }
    }
    return roman;
}

console.log(covertRomanToNumber(42));