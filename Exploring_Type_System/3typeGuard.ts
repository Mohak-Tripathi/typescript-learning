// Type guards#
// When working with union types, the compiler will still apply its strong typing rules to ensure type safety.

//PROBLEM - 
// Declare a function called addWithUnion that takes in two parameters, arg1 and arg2, with types of string or number
// function addWithUnion(
//     arg1: string | number,
//     arg2: string | number
//   ) {
//     // Return the sum of arg1 and arg2
//     return arg1 + arg2;
//   }

//ERROR- index.ts(7,10): error TS2365: Operator '+' cannot be applied to types 'string | number' and 'string | number'.

//Solution
//A type guard is an expression that performs a check on our type and then guarantees that type within its scope

  // Declare a function called addWithTypeGuard that takes in two parameters, arg1 and arg2, with types of string or number
function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
  ) {
    // Check if arg1 is a string
    if (typeof arg1 === "string") {
      // If it is, log that it is a string and return the sum of arg1 and arg2 as a string
      console.log(`arg1 is of type string`);
      return arg1 + arg2;
    }
    // Check if both arg1 and arg2 are numbers
    if (typeof arg1 === "number" && typeof arg2 === "number") {
      // If they are, log that they are numbers and return the sum of arg1 and arg2 as a number
      console.log(`arg1 and arg2 are numbers`);
      return arg1 + arg2;
    }
    // If arg1 and arg2 are not both numbers, log that they are being treated as strings and return their concatenation as a string
    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
  }
  
  console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
  console.log(` 1 , 2 = ${addWithTypeGuard(1, 2)}`);
  console.log(` 1 , "2" = ${addWithTypeGuard(1, "2")}`);
