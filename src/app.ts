/*
============================================
Intersection Types
============================================
type Person = {
  name: string;
  age: number;
};

type Muscular = {
  isMuscular: boolean;
  activities?: string[];
};

// the '&' combines two types to create a type that must consist of properties of both types
type MuscularPerson = Person & Muscular;

let annie: MuscularPerson;

annie = {
  // Notice how annie must have all 4 properties.
  // activities is not necessary cuz I labeled it as optional
  name: "Annie Teal",
  age: 31,
  isMuscular: true,
  activities: ["Bench Press", "Squats"],
};

type NumString = number | string;
type ArrayString = Date | string;

// Combinable will be only string cuz with union types
// It sees for types that intersect
type Combinable = NumString & ArrayString;

type UnknownPerson = Person | Muscular;

// If property name exists in individual
// console.log it
// same for if isMuscular property exists

// type guard
function check(individual: UnknownPerson) {
  if ("name" in individual) {
    console.log("Name is: " + individual.name);
  }
  if ("isMuscular" in individual) {
    console.log("Is Strong? " + individual.isMuscular);
  }
}

check(annie);
*/

/*
// ============================================
// Type Guard
// ============================================
interface Transports {
  drive: () => void;
  loadCargo?: (cargo: boolean) => void;
}

class Car implements Transports {
  drive() {
    console.log("Driving a car");
  }
}

class Truck implements Transports {
  drive() {
    console.log("Driving a truck");
  }

  loadCargo(cargo: boolean) {
    console.log("Is truck loading Cargo? " + cargo);
  }
}

type Vehicle = Car | Truck;

let v1 = new Car();
let v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle || vehicle instanceof Truck) {
    vehicle.loadCargo(true);
  }
}

useVehicle(v1);
// Since v2 is a 'Truck' instance, it will invoke load cargo as a function
// as opposed to v1 'Car' instance
useVehicle(v2);
*/

/*
// ============================================
// Type Casting OR Type Assertions
// ============================================
let userInputElement = document.getElementById(
  "user-input"
  ) as HTMLInputElement;

  // TS nows user input will be an HTMLInputElement.
  // Without 'as' it could be an element or null, which may or may not contain a value key

  userInputElement.value = "Hey there";
  */

/*
// ============================================
// Index Properties
// ============================================
// this interface is flexible and can have many properties as needed
// of the type I mentioned below
interface ErrorContainer {
  [props: string]: string | number | boolean;
}

const errorBag: ErrorContainer = {
  errorOccurs: true,
  email: "Not a valid e-mail",
  id: 2,
};
*/

/*
// ============================================
// Function Overload
// ============================================
type Combinable = number | string;

// the two function up top is an example of 2 OVERLOADS
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Typescript believes result it either a number OR a string
// not sure tho
// however with overloads, TS knows two numbers passed in returns a number
// same for res2, which is a string
const result = add(1, 3);
const res2 = add("1", "3");
*/
