//class access modifiers  - public, private,  protected and readonly


// Define a class with a private property named "id"
class ClassWithPrivateProperty {
    // Declare the private property "id" with the type "number"
    private id: number;
  
    // Constructor with parameter "id" to initialize the private property "id"
    constructor(id: number) {
      this.id = id;
    }
  }
  
  // Create an instance of ClassWithPrivateProperty and pass in a value of 10 for "id"
  let privateAccess = new ClassWithPrivateProperty(10);
  
  // Attempt to assign a value of 20 to the private property "id". 
  // This will throw an error because private properties cannot be accessed or modified outside of the class.
  privateAccess.id = 20;



  //Note: Class functions and properties are public by default. The use of class access modifiers is a tool that we can use when writing TypeScript code and helps to protect variables from accidental assignment. These access modifiers, however, will not appear in the JavaScript that is generated from our code. The compiler will, in fact, remove any of these constraints when generating JavaScript.