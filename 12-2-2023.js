// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

function roundToNext5(n){
    if (n % 5 === 0) {
      return n;
    }
    return roundToNext5(n + 1);
  }

// best practices 
function roundToNext5(n){
    return Math.ceil(n/5)*5;
  }


  function roundToNext5(n){
    while(n % 5 !== 0) n++;
    return n;
  }