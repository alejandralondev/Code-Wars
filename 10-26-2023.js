// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.



function toJadenCase(str) {
    // Split the string
    const words = str.split(" ")
    
    // For func to capitalize each word in an array
    for (let i = 0; i < words.length; i++) {
      // Extract the word at the current index
      let word = words[i]
      
      // Capitalize the first letter of the word
      // Slice the word
      word = word.charAt(0).toUpperCase() + word.slice(1)
      
      // Update the words array with the capitalized word
      words[i] = word
    }
    
    // Join the words back into a string
    const jadenCaseString = words.join(" ")
    
    return jadenCaseString
  }