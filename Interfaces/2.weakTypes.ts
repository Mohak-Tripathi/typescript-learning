//When we define an interface where all of its properties are optional, this is considered to be a weak type. In other words, we have defined an interface, but none of the properties of the interface are mandatory.

// Interface `IWeakType` defines the structure of a weak type object with optional properties `id`, `name`, and `description`
interface IWeakType {
    id?: number;
    name?: string;
    description?: string;
  }
  
  // `weakTypeNoOverlap` is a variable that is assigned an object that matches the structure defined by `IWeakType`
  // The object has a `description` property, which is now part of the `IWeakType` definition
  let weakTypeNoOverlap: IWeakType = {
    description: "a description",
  };