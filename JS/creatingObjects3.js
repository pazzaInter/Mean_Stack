function VehicleConstructor(name, wheels, passengers, speed) {
  if (!(this instanceof VehicleConstructor)){
   return new VehicleConstructor(name,wheels,passengers, speed);
  }
  var _this = this;

  // public
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.distanceTravelled = 0;
  this.vin = Math.floor(Math.random()*100000000000000000);
}

VehicleConstructor.prototype.makeNoise = function () {};
VehicleConstructor.prototype.move = function () {
  this.updateDistanceTravelled();
  this.makeNoise();
  return this
}
VehicleConstructor.prototype.updateDistanceTravelled = function () {
  this.distanceTravelled += this.speed;
}
VehicleConstructor.prototype.checkMiles = function () {
  console.log('The current mileage on the vehicle is ' + this.distanceTravelled);
}

const Bus = new VehicleConstructor('Bus', 8, 50, 30)

Bus.makeNoise = function () {
  console.log("Honk Honk");
}

Bus.pickUpPassenger= function () {
  Bus.passengers ++
  console.log('Piked up 1 passenger');
}

console.log(Bus);
Bus.pickUpPassenger()
Bus.move().move().move()
Bus.checkMiles()
console.log(Bus.vin);
console.log(Bus.vin);
console.log(Bus.vin);
console.log(Bus.vin);

const Car = new VehicleConstructor('Car', 4, 5, 50)
console.log('The car vin:' + Car.vin);
