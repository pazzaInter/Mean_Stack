function VehicleConstructor(name, wheels, passengers) {
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = wheels;
  vehicle.passengers = passengers;

  vehicle.makeNoise = function () {}
  return vehicle
}

const bike = VehicleConstructor('Bike', 2, 1)

bike.makeNoise = function () {
  console.log('ring ring');
}

console.log(bike);

var sedan = VehicleConstructor('Sedan', 4, 5)

sedan.makeNoise = function (){
  console.log('Honk Honk');
}

console.log(sedan);

var bus = VehicleConstructor('Bus', 8, 50)

console.log(bus);

bus.pickUpPassenger= function () {
  bus.passengers ++
}

bus.pickUpPassenger()
console.log(bus);
