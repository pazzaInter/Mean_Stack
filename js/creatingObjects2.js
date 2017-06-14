function VehicleConstructor(name, wheels, passengers, speed) {
  if (!(this instanceof VehicleConstructor)){
   return new VehicleConstructor(name,wheels,passengers, speed);
  }
  // private
  var distanceTravelled = 0;
  var _this = this;
  function updateDistanceTravelled () {
    distanceTravelled += _this.speed;
  }

  // public
  this.name = name;
  this.wheels = wheels;
  this.passengers = passengers;
  this.speed = speed;
  this.makeNoise = function () {};
  this.move = function () {
    updateDistanceTravelled();
    _this.makeNoise();
    return _this
  }
  this.checkMiles = function () {
    console.log('The current mileage on the vehicle is ' + distanceTravelled);
  }
}

const Bus = new VehicleConstructor('Bus', 8, 50, 30)

Bus.makeNoise = function () {
  console.log("Honk Honk");
}

Bus.pickUpPassenger= function () {
  Bus.passengers ++
}

Bus.pickUpPassenger()
console.log(Bus);
Bus.move().move()
Bus.checkMiles()
