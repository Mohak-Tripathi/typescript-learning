//ES 5 introduced the concept of property accessors, or get and set functions. A property accessor is simply a function that is called when a user of our class gets the value of a property or sets its value

class ClassWithAccessors {
    // declare a private property to store the ID
    private _id: number = 0;
  
    // define the getter for the "id" property
    get id(): number {
      console.log(`get id property`); // log when the "id" property is being accessed
      return this._id; // return the private "_id" property
    }
  
    // define the setter for the "id" property
    set id(value: number) {
      console.log(`set id property`); // log when the "id" property is being modified
      this._id = value; // set the value of the private "_id" property
    }
  }

  // create an instance of the ClassWithAccessors
let classWithAccessors = new ClassWithAccessors();

// set the value of the "id" property using the setter
//different syntax when we use get or set keyword or when we use property accessor
classWithAccessors.id = 10;

// get the value of the "id" property using the getter
console.log(`classWithAccessors.id = ${classWithAccessors.id}`); // logs: "classWithAccessors.id = 10"