
// Declare a variable called item1 and assign to it an object literal that has properties id and name, explicitly specifying its type as any
var item1 = <any>{ id: 1, name: "item1" }
// Assign a new object literal to item1 with only an id property
item1 = { id: 2 };




//Another variant of this casting technique is to use the as keyword as follows:

// Declare a variable called item1 and assign to it an object literal that has properties id and name, explicitly specifying its type as any using the <any> cast syntax
var item1 = { id: 1, name: "item1" } as any;

// Assign a new object literal to item1 with only an id property
item1 = { id: 2 };
