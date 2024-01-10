// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    const lowerStr = str.toLowerCase();
  
    // Count 'x' and 'o'
    const countX = (lowerStr.match(/x/g) || []).length;
    const countO = (lowerStr.match(/o/g) || []).length;
  
    // Check if counts are equal
    return countX === countO;
  }