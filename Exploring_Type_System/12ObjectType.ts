//TypeScript introduces the object type to cover types that are not primitive types. This includes any type that is not number, boolean, string, null, symbol, or undefined.

let structuredObject: object = {
    name: "myObject",
    properties: {
      id: 1,
      type: "AnObject"
    }
  };
  
  // Define a function that takes an object as an argument and logs its string representation
  function printObjectType(a: object) {
    console.log(`a: ${JSON.stringify(a)}`);
  }
  
  printObjectType(structuredObject);
  