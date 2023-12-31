// numbers, strings, and booleans , undefined, null, unknown, and never.


//undefined

let array = ["123", "456", "789"];  // Initialize an array with 3 elements, "123", "456", and "789"
delete array[0]; // delete the element at index 0 of the array, in this case "123". Using delete leaves a hole in the index and can cause unexpected behavior in many situations. 

// Use a for loop to iterate over the array
for (let i = 0; i < array.length; i++) {
  checkAndPrintElement(array[i]); // call the checkAndPrintElement function with the current element of the array as a parameter
}

// checkAndPrintElement function 
function checkAndPrintElement(arrElement: string | undefined) {
  // check if the passed element is undefined
  if (arrElement === undefined) {
    console.log(`invalid array element`); // If the element is undefined, log the message "invalid array element"
  } else {
    console.log(`valid array element : ${arrElement}`); // Else if the element is defined, log the message "valid array element: " and the element
  }
}



//null 
// function that takes a parameter of type `number` or `null`
function printValues(a: number | null) {
    console.log(`a = ${a}`);  // log the value of a
  }
  
  printValues(1); // call the function with a number value of 1
  printValues(null); // call the function with a null value