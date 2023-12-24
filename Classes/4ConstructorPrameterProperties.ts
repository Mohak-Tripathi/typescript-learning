class ClassWithCtorMods {
    // Constructor function with parameters, 'id' and 'name'
    // Using shorthand access modifiers, 'public' for 'id' and 'private' for 'name'
    constructor(public id: number, private name: string) {
    }
  }
  
  // Create an instance of ClassWithCtorMods and assign it to the variable 'myClassMod'
  let myClassMod = new ClassWithCtorMods(1, "test");
  
  // Log the value of the 'id' property to the console
  console.log(`myClassMod.id = ${myClassMod.id}`);
  
  // Log the value of the 'name' property to the console
  console.log(`myClassMod.name = ${myClassMod.name}`);
  

  //Note: We have marked the id property as public within the constructor function definition, and we have marked the name property as private. This shorthand automatically creates an internal id property and a name property on the class itself, which can be used as standard properties.