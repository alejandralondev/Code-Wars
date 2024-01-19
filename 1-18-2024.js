// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    // Check if number is negative
    if (num > 0) {
      // Make it negative
      return -num;
    } else {
      // If already negative or zero, return
      return num;
    }
  }