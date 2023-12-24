//TypeScript will also apply its checks for null or undefined when we use basic operands, such as add (+), multiply (*), divide (/), or subtract (-).


// This function takes in two parameters, "a" and "b"
// "a" is a number
// "b" is either a number, null, or undefined

// function testNullOperands(a: number, b: number | null | undefined) {
  
//     // This line declares a variable "addResult" and assigns it the result of adding "a" and "b"

//     //Error because you can't add number with null or undefined
//     let addResult = a + b;
    
//   }


//Solution - 


function testNullOperands(a: number, b: number | null | undefined) {
  
//use NullishCoalesing
    let addResult = a + (b ?? 0);
    
  }
  