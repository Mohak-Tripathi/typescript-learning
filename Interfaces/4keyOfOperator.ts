//Note: Using the keyof keyword will generate a string literal that automatically includes all of the properties of an interface. This technique is obviously preferable to having to maintain string literals manually.


interface IPerson {
    id: number;
    name: string;
  }
  
  type PersonPropertyName = keyof IPerson;   //type PersonPropertyLiteral = "id" | "name";
  
  // Define a function `getProperty` that accepts two parameters
  function getProperty(key: PersonPropertyName, value: IPerson) {
    console.log(`${key} = ${value[key]}`);
  }
  
  // Call the function `getProperty` with argument `"id"` and an object with `id` and `name` properties
  getProperty("id", { id: 1, name: "firstName" });
  
  // Call the function `getProperty` with argument `"name"` and an object with `id` and `name` properties
   getProperty("name", { id: 2, name: "secondName" });
  
  // // Call the function `getProperty` with argument `"telephone"` and an object with `id` and `name` properties
  // getProperty("telephone", { id: 3, name: "thirdName" });
