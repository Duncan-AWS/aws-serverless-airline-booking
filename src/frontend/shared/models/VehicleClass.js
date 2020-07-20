/** Class representing Vehicle. All permutations of data from Vehicle, a different date format for instance, should happen here. */
export default class Vehicle {
  /**
   * Creates an instance of Vehicle.
   * @param {Object} Vehicle
   * @param {string} Vehicle.vrn - Vehicle Registration Number
   * @param {string} Vehicle.make - Make of vehicle
   * @param {string} Vehicle.model - Model of vehicle
   * @param {string} Vehicle.colour - Colour of vehicle
   * @example
   * let vehicle = new Vehicle({
   *    vrn:    "FV59 DSE",
   *    make:   "BMW",
   *    model:  "520",
   *    colour: "Grey",
   *    customer: "3fe22b2c-2b52-4a75-9db7-6cfc36a0cfcd"
   * })
   */
  constructor({ vrn, make, model, colour }) {
    this.vrn = vrn;
    this.make = make;
    this.model = model;
    this.colour = colour;
  }
}
