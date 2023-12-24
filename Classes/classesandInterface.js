var ClassA = /** @class */ (function () {
    function ClassA(_name) {
        this.name = _name;
    }
    ClassA.prototype.print = function () {
        return "hi everyone ".concat(this.name);
    };
    return ClassA;
}());
//create Instance-
var ClassAInstance = new ClassA("Mohak");
function printResult(obj) {
    //   console.log(obj.name, obj.print(), "check result");
    console.log(obj.print(), "check result");
}
printResult(ClassAInstance);
