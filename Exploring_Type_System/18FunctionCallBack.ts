//IN JS

// Declare a callback function called "myCallback" 
// var myCallback = function(text) {
//     // Log the message "myCallback called with" followed by the input "text"
//     console.log("myCallback called with " + text);
// }

// // Declare a function "withCallbackArg" that takes two arguments "message" and "callbackFn"
// function withCallbackArg(message, callbackFn) {
//     // Log the message "withCallback called, message :" followed by the input "message"
//     console.log("withCallback called, message : " + message);
//     // Call the callback function "callbackFn" with the message "message + " from withCallback" as an argument
//     callbackFn(message + " from withCallback");
// }

// // Call the function "withCallbackArg" with two arguments "initial text" and the callback function "myCallback"
// withCallbackArg("initial text", myCallback);
// withCallbackArg("text", "this is not a function");



//in ts- 



// Declare a function "myCallback" that takes a string argument "text" and returns nothing
function myCallback(text: string): void {
    // Log the message "myCallback called with" followed by the input "text" using template literals
    console.log(`myCallback called with ${text}`);
  }
  
  // Declare a function "withCallbackArg" that takes two arguments:
  // - "message" of type string
  // - "callbackFn" of type function that takes a string argument and returns nothing
  function withCallbackArg(
   message: string,
   callbackFn: (text: string) => void
  ) {
    // Log the message "withCallback called, message :" followed by the input "message" using template literals
    console.log(`withCallback called, message : ${message}`);
    // Call the callback function "callbackFn" with the message "message + " from withCallback" as an argument
    callbackFn(`${message} from withCallback`);
  }
  
  withCallbackArg("initial text", myCallback);
  withCallbackArg("text", "this is not a function");







  //Function overrides  - i found concept useless. 
  