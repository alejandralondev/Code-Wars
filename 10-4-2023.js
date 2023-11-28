// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

function abbrevName(name){
    //first split the two words into first and last name
    //make variable for the first and last name
    //use split method to split a string into an array of substrings
      let [firstName, lastName] = name.split(" ");
      //target first name array, create variable for first initical and capitalize it using to upper case
      let firstInitial = firstName[0].toUpperCase();
      //do it for the last name
      let lastInitial = lastName[0].toUpperCase();
      
      //return the initials separated by a dot
      return `${firstInitial}.${lastInitial}`;
  } 