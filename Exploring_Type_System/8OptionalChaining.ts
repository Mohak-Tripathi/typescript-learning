//problem = 


//solution 1
// This function takes an object as its input and checks for the existence of the nested property "nestedProperty.name"
function printNestedObject(obj: any) {
    // Check if the input object is defined
    if (obj != undefined
    && obj.nestedProperty != undefined
    && obj.nestedProperty.name) {
      console.log(`name = ${obj.nestedProperty.name}`)
    } else {
      console.log(`name not found or undefined`);
    }
  }
  
  let objectA = { nestedProperty: { name: 'John Doe' } };
  
  printNestedObject(objectA); 


  //solution 2



  function printNestedOptionalChain(obj: any) {
    // Check if obj is defined and if it has a property called "nestedProperty"
    if (obj?.nestedProperty?.name) {
      // If the above check passes, log the value of the "name" property
      console.log(`name = ${obj.nestedProperty.name}`)
    } else {
      // If the check fails, log that the "name" property was not found or is undefined
      console.log(`name not found or undefined`);
    }
  }
  
  printNestedOptionalChain(undefined);
  printNestedOptionalChain({
    aProperty: "another property",
  });
  printNestedOptionalChain({
    nestedProperty: {
      name: null,
    },
  });
  printNestedOptionalChain({
    nestedProperty: {
      name: "nestedPropertyName",
    },
  });
  