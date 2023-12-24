//we can create a named type that can be used as a substitute for a type union.

// Define a type alias for a string or number
type StringOrNumber = string | number;

// Declare a function that takes two arguments, both of type 'StringOrNumber'
function addWithTypeAlias(
  arg1: StringOrNumber,
  arg2: StringOrNumber
) {
  // Convert both arguments to strings and return the concatenation
  return arg1.toString() + arg2.toString();
}

console.log(addWithTypeAlias(1, 2)); // Output: '12'
console.log(addWithTypeAlias('Hello', ' World')); // Output: 'Hello World'

//Type aliases are a handy way of specifying a type union and giving it a name, and they are particularly useful when the type union is used over and over again.