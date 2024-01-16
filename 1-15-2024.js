// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
    if (a > b) {
      return "a should be less than b";
    }
  
    const result = [];
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
  
    return result;
  }