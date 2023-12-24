// Declaring a class named "StaticFunction"
class StaticFunction {
    // Declaring a static function named "printTwo"
    static printTwo() {
      // Logging the value "2" to the console
      console.log(`2`)
    }
  }
  
  // Calling the static function "printTwo" without creating an instance of the class
  StaticFunction.printTwo();
  


  //static properties now
  // Define a class "StaticProperty"
class StaticProperty {
    // Declare a static property "count" with value 0
    static count = 0;
    
    // Define a method "updateCount" to increase the value of "count" by 1
    updateCount() {
      StaticProperty.count++;
    }
  }



  // Create two instances of the class "StaticProperty"
let firstInstance = new StaticProperty();
let secondInstance = new StaticProperty();

// Call the method "updateCount" on the first instance
firstInstance.updateCount();
// Log the value of "count" after calling the method on the first instance
console.log(`StaticProperty.count = ${StaticProperty.count}`);

// Call the method "updateCount" on the second instance
secondInstance.updateCount();
// Log the value of "count" after calling the method on the second instance
console.log(`StaticProperty.count = ${StaticProperty.count}`);   

//two different intances but still count value is synchronized