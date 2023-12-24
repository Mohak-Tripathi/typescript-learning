interface Iprint {
//   name: string;
  print(): string;
}

class ClassA implements Iprint {
  private name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  print(): string {
    return `hi everyone ${this.name}`;
  }
}

//create Instance-

let ClassAInstance = new ClassA("Mohak");

function printResult(obj: Iprint) {
//   console.log(obj.name, obj.print(), "check result");
 console.log(obj.print(), "check result");

}

printResult(ClassAInstance);


//Interfaces, therefore, can be seen as a type of contract that classes must implement if they are expected to provide certain properties and certain behaviors.
