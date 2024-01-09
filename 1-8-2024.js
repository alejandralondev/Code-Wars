// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.


function highAndLow(numbers) {
    // Step 1: Split the input string into an array of numbers
    const numberArray = numbers.split(" ").map(Number);
  
    // Step 2: Find the maximum and minimum values in the array
    const maxNumber = Math.max(...numberArray);
    const minNumber = Math.min(...numberArray);
  
    // Step 3: Return the highest and lowest numbers as a formatted string
    return `${maxNumber} ${minNumber}`;
  }