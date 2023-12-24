//optional paramaters


function sumOfTwoNumbers(a: number, b?: number): number{
    // if(b){
    //     return a+b;
    // }
    // else {
    //     return a
    // }

    return a+ (b?? 0)
}

function sumOfTwoStrings(a: string, b?: string): void{
    // if(b){
    //     return a+b;
    // }
    // else {
    //     return a
    // }

    console.log( a + b)
}

sumOfTwoStrings("hello", "world")
sumOfTwoStrings("hello")




//Default parameters


// This function concatenates two string values, "a" and "b", and logs the result to the console.
// The second parameter "b" has a default value of "default", indicated by the "=" and the string value after its type declaration.
function concatWithDefault(a: string, b: string = "default") {
    console.log(`a + b = ${a + b}`);
  }
  
  // Calling the function with different arguments
  concatWithDefault("first", "second");
  concatWithDefault("third");


  //Note- node need of  ? also defining type :string, ts will take care itself







  //rest parameter- 


  // This function logs all of the arguments passed to it, along with their index.

  //stupid js- This function work well in js- 
// function testArguments() {
//     for (var i = 0; i < arguments.length; i++) {
//       console.log(`argument[${i}] = ${arguments[i]}`);
//     }
//   }
  
//   // Calling the function with different arguments
//   testArguments(1, 2);
//   testArguments("first", "second", "third");

//in ts- (with rest paramter)

function testArguments(...args: (string[] | number[])):void {

    for (let i in args) {
        // Log each argument in the format `args[i] = argument_value`
        console.log(`args[${i}] = ${args[i]}`);
      }

}

  testArguments(1, 2);
  testArguments("first", "second", "third");


