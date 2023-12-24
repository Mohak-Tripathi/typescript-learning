//ES 5 introduced the concept of property accessors, or get and set functions. A property accessor is simply a function that is called when a user of our class gets the value of a property or sets its value
var ClassWithAccessors = /** @class */ (function () {
    function ClassWithAccessors() {
        // declare a private property to store the ID
        this._id = 0;
    }
    Object.defineProperty(ClassWithAccessors.prototype, "id", {
        // define the getter for the "id" property
        get: function () {
            console.log("get id property"); // log when the "id" property is being accessed
            return this._id; // return the private "_id" property
        },
        // define the setter for the "id" property
        set: function (value) {
            console.log("set id property"); // log when the "id" property is being modified
            this._id = value; // set the value of the private "_id" property
        },
        enumerable: false,
        configurable: true
    });
    return ClassWithAccessors;
}());
// create an instance of the ClassWithAccessors
var classWithAccessors = new ClassWithAccessors();
// set the value of the "id" property using the setter
classWithAccessors.id = 10;
// get the value of the "id" property using the getter
console.log("classWithAccessors.id = ".concat(classWithAccessors.id)); // logs: "classWithAccessors.id = 10"
