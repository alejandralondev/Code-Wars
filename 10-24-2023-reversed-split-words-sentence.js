// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
    // Split string into words using a spce
    // Now we have "string" "split" "up"
    const words = str.split(" ")
    
    // Init array to store the reversed words
    const reversedWords = []
  
    // Iterate through each word and reverse it
    // Use push to push it into the reversedWords array
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      const reversedWord = reverseWord(word)
      reversedWords.push(reversedWord)
    }
  
    // Join reversed words back together with spaces
    const reversedString = reversedWords.join(" ")
    return reversedString
  }
  // to reverse a single word and use the passed wordsin the reversed words array
    function reverseWord(word) {
    return word.split("").reverse().join("")
  }