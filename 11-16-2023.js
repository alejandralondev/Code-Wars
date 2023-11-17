// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums) {
    // check if nums is null or empty
    if (!nums || nums.length === 0) {
      return [] 
    }
  
    // sort the array of numbers
    nums.sort(function(a, b) {
      return a - b // ascending order
    });
  
    return nums
  }