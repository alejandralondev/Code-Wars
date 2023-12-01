//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

var isAnagram = function(test, original) {
    // Convert both strings to lowercase to make the comparison case-insensitive
    var testLower = test.toLowerCase();
    var originalLower = original.toLowerCase();
  
    // Check if the length of both strings is the same
    if (testLower.length !== originalLower.length) {
      return false;
    }
  
    // Convert strings to arrays, sort them, and compare if they are equal
    var testSorted = testLower.split('').sort().join('');
    var originalSorted = originalLower.split('').sort().join('');
  
    // Compare the sorted strings
    return testSorted === originalSorted;
  };
  