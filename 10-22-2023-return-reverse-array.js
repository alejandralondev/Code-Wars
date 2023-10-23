// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    // convert number to a string
    // split into array of characters
    // reverse the array, when you apply map(Number) to an array of strings, it converts each string element to a number
    // convert the characters back to integers using reverse
    return String(n).split('').map(Number).reverse()
  }