// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

function squareDigits(num) {
    // Convert number to string to access digits
    var numStr = num.toString();
    var result = ''; // Variable to store the separated squarewd digits

    // Loop through each digit of the number
    for (var i = 0; i < numStr.length; i++) {
        // Extract the current digit and convert it back to integer
        var digit = parseInt(numStr[i])
        
        // Square the digit
        var squaredDigit = digit * digit
        
        // Convert the squared digit back to a string and concatenate it to the result string
        result += squaredDigit.toString()
    }

    // Parse the result string to an integer and return the squared number
    return parseInt(result)
}