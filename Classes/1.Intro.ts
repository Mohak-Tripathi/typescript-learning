class SimpleClass {
    // "id" property can be either a number or undefined
    id: number | undefined;
    print(): void {
      console.log(`SimpleClass.id = ${this.id}`);
    }
  }
  
  // Create an instance of SimpleClass and assign it to "mySimpleClass" variable
  let mySimpleClass = new SimpleClass();
  
  // Set the value of "id" property to 2020
  mySimpleClass.id = 2020;
  
  // Call the "print" method to log the value of "id" property
  mySimpleClass.print();