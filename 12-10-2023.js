// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    let sum = 0;
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // Check if the number is positive
      if (arr[i] > 0) {
        // Add positive numbers to the sum
        sum += arr[i];
      }
    }
  
    return sum;
  } 