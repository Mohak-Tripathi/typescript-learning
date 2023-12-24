//By defining an interface, we are describing the properties and functions that an object is expected to have in order to be used by our code.
//Interfaces in TypeScript provide a way to define contracts for object structures, ensuring that code adheres to certain requirements.


interface IIdName {
    id: number;
    name: string;
  }
  
  // The object now has `id` property with value `2` and `name` property with value `"this is a name"`
  let idObject: IIdName = {
    id: 2,
    name: "this is a name",
  };

  