// Enums
// Learn how to use TypeScript enums to define named value sets for variables or function parameters.

// enum DoorState {
//     open,
//     close
// }

// function DoorStepsValue(state: DoorState){

//     console.log(`State: ${state}`)

//     switch(state){

//         case DoorState.open:
//             console.log(`we are open`)
//             break;
        
//         case DoorState.close:
//             console.log(`we are closed`)
//             break;
//     }

// }

// DoorStepsValue(DoorState.open)





// Define an enum with the values 'Open' and 'Closed'
enum DoorState {
    Open,
    Closed
  }
  
  // Declare a function that takes an argument of type 'DoorState'
  function checkDoorState(state: DoorState) {
    // Print the enum value to the console
    console.log(`enum value is : ${state}`);
  
    // Use a switch statement to check the value of 'state'
    switch (state) {
      // If 'state' is 'Open', print a message to the console
      case DoorState.Open:
        console.log(`Door is open`);
        break;
      // If 'state' is 'Closed', print a message to the console
      case DoorState.Closed:
        console.log(`Door is closed`);
        break;
    }
  }





 // Using enums helps us to provide a clear set of values for a variable or function parameter. They also provide a tried and tested way of eliminating so-called “magic numbers” by defining a limited number of possible values.

//  enum DoorStateSpecificValues {
//     Open = 3,
//     Closed = 7,
//     Unspecified = 256
//    }


//Const enum

// Declare a constant enum called DoorStateConst
const enum DoorStateConst {
    // The value of 'Open' is set to 10
    Open = 10,
    // The value of 'Closed' is set to 20
    Closed = 20
  }
  
  // Log the string 'const Closed = [value of DoorStateConst.Open]' to the console
  console.log(`const Closed = ${DoorStateConst.Open}`);