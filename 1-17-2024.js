// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

const binaryArrayToNumber = arr => {
    // Array elements into a string
    const binaryString = arr.join('')
    
    // Convert the binary string to an integer using parseInt
    const decimalNumber = parseInt(binaryString, 2)
    
    return decimalNumber
  }