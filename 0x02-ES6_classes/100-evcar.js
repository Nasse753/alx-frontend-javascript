import Car from './10-car.js';

// Symbol for private attributes
const brandSymbol = Symbol('brand');
const motorSymbol = Symbol('motor');
const colorSymbol = Symbol('color');
const rangeSymbol = Symbol('range');

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[rangeSymbol] = range;
  }

  // Getter method for range
  get range() {
    return this[rangeSymbol];
  }

  // Override cloneCar method
  cloneCar() {
    const clonedCar = new Car(this[brandSymbol], this[motorSymbol], this[colorSymbol]);
    return clonedCar;
  }
}
