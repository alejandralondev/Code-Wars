//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

function descendingOrder(number) {
    // Convert the number to a string, split into array of digits, sort in descending order, and join back to a string
    return parseInt(number.toString().split('').sort(function(a, b) {
        return b - a;
    }).join(''));
}