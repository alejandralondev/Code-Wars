// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

function sumTwoSmallestNumbers(numbers) {
    // Sort the array in ascending order
    numbers.sort(function(a, b) {
        return a - b;
    });
    
    // Sum the first two elements (which will be the two smallest positive numbers)
    var sum = numbers[0] + numbers[1];
    
    return sum;
}