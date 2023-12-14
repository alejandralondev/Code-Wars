// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function find_average(array) {
    if ( array.length == 0) return 0
    let result = 0;
    for(num of array) {
      result += num;
    }
    return result / array.length;
  }

// best practices

var find_average = (array) => {  
    return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
  }