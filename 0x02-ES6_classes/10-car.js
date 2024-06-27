// Symbol for private attributes
const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');

export default class Car {
  constructor(brand, motor, color) {
    this[brandSymbol] = brand;
    this[motorSymbol] = motor;
    this[colorSymbol] = color;
  }

  // Getter methods
  get brand() {
    return this[brandSymbol];
  }

  get motor() {
    return this[motorSymbol];
  }

  get color() {
    return this[colorSymbol];
  }

  // Method to clone the Car object
  cloneCar() {
    const clonedCar = new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
    return clonedCar;
  }
}
