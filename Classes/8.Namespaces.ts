// Declare a namespace named "FirstNameSpace"
namespace FirstNameSpace {
    // Export a class named "NameSpaceClass" from the namespace
    export class NameSpaceClass {}
    // Declare a class named "NotExported" within the namespace
    class NotExported {}
  }


  // Instantiate the exported class "NameSpaceClass" from the namespace "FirstNameSpace"
let nameSpaceClass = new FirstNameSpace.NameSpaceClass();
// This line will result in an error because the class "NotExported" is not exported from the namespace
let notExported = new FirstNameSpace.NotExported();