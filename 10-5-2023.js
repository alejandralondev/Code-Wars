//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumMix(x){
    //start a variable to store total sum  of array values
    let sum = 0
    //go through each element in the input array
    for (var i = 0; i < x.length; i++) {
      //the '+' operator for type coercion to convert the current element to a number
      //this step handles both integer strings and numbers in the array.
      var num = +x[i];
      //check if the current element is a valid number after conversion
      //if it's a valid number, add it to the `sum` variable
      if (!isNaN(num)) {
        sum += num;
      }
    }
  
    //return the total sum of the array values as a number.
    return sum;
  }

  
//Best Practices (from codewars)
//1
function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

//2
function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}

//3
const sumMix=x=>x.reduce((a,b)=>+b+a,0)

//4
function sumMix(x){
    var somme = 0;
    for (i = 0; i<x.length; i++) {
      somme += Number(x[i]);
    }
    return somme;
  }