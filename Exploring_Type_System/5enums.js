// Enums
// Learn how to use TypeScript enums to define named value sets for variables or function parameters.
var DoorState;
(function (DoorState) {
    DoorState[DoorState["open"] = 0] = "open";
    DoorState[DoorState["close"] = 1] = "close";
})(DoorState || (DoorState = {}));
function DoorStepsValue(state) {
    console.log("State: ".concat(state));
    switch (state) {
        case DoorState.open:
            console.log("we are open");
            break;
        case DoorState.close:
            console.log("we are closed");
            break;
    }
}
DoorStepsValue(DoorState.open);
