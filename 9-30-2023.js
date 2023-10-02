// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    //start an array with a variable and a bracket
    let result = [];
    //loopfrom n (i=n) to 1, we use -- to subtract one since it is a countdown, a reverse sequence
    for (let i = n; i>= 1; i--) {
    //push i to the answer array
      result.push(i);
    }
    return result;
  };

