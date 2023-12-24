//the number and types defined in a tuple must be provided when we assign anything to a tuple.

// Tuple destructuring
// As tuples use the array syntax, they can be destructured or disassembled in two ways.

// Declare a tuple called tuple1 with elements of type string and boolean
let tuple1: [string, boolean];

// Assign values "test" and true to the tuple
tuple1 = ["test", true];

// This assignment is incorrect as it is missing a second element of type boolean
// and will result in a TypeScript error
// tuple1 = ["test"];


// Optional tuple elements
// The tuple elements can be marked optional by using the question mark (?) after the type, as follows

// Declare a tuple called tupleOptional with elements of type string and optional boolean
let tupleOptional: [string, boolean?];

// Assign values "test" and true to the tuple
tupleOptional = ["test", true];

// Assign values "test" to the tuple with the second element being optional
tupleOptional = ["test"];

// Print the first element of tupleOptional
console.log(`tupleOptional[0] : ${tupleOptional[0]}`);

// Print the second element of tupleOptional, which may be undefined
console.log(`tupleOptional[1] : ${tupleOptional[1]}`);





// Declare a tuple called tupleOptional with elements of type string and optional boolean
// let tupleOptional: [string, boolean?];

// // Assign values "test" and true to the tuple
// tupleOptional = ["test", true];

// // Assign values "test" to the tuple with the second element being optional
// tupleOptional = ["test"];

// // Print the first element of tupleOptional
// console.log(`tupleOptional[0] : ${tupleOptional[0]}`);

// // Print the second element of tupleOptional, which may be undefined
// console.log(`tupleOptional[1] : ${tupleOptional[1]}`);


// Tuples and spread syntax- 

// Declare a tuple called tupleRest with elements of type number and an array of strings
let tupleRest: [number, ...string[]];

// Assign a value of 1 to the first element of the tuple, and an empty array of strings to the rest
tupleRest = [1];

// Assign a value of 1 to the first element of the tuple, and an array with one element "string1" to the rest
tupleRest = [1, "string1"];

// Assign a value of 1 to the first element of the tuple, and an array with two elements "string1" and "string2" to the rest
tupleRest = [1, "string1", "string2"];










//object destructuring - 
// Declare an object literal with properties aNum, bStr, and cBool
let complexObject = {
    aNum: 1,
    bStr: "name",
    cBool: true
   }
   
   // Destructuring assignment to extract properties from complexObject
   let { aNum, bStr, cBool } = complexObject;
   