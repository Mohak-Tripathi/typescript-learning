// Define a function that always throws an error and returns never
function alwaysThrows(): never {
    // Throw an error with a specified message
    throw new Error("this will always throw");
    
    // Return a value, but it will never be reached because of the thrown error
     return -1;
  }
  
  alwaysThrows();

  //This error message is clearly telling us that the function, which returns a type of never, is attempting to return the value of -1. The compiler, therefore, has identified a flaw in our logic.





  // Define an enumeration with two values
enum AnEnum {
    FIRST,
    SECOND
  }
  
  // Define a function that takes an enumeration value and returns a string
  function getEnumValue(enumValue: AnEnum): string {
    // Use a switch statement to determine which enumeration value was passed
    switch (enumValue) {
      // Return a string for the FIRST enumeration value
      case AnEnum.FIRST: return "First Case";
      // Return a string for SECOND enumeration value
     case AnEnum.SECOND: return "Second Case";
    }
  
    // Declare a variable to store the return value, with a type of never
    let returnValue: never = enumValue;
  
    // Return the value
    return returnValue;
  }