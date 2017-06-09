var someObject = {
  // Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
  sumRange: function (x,y) {
    var sum = 0;
    for (var i = x; i <= y; i++) {
      sum += i;
    }
    console.log(sum);
  },

  // Write a loop that will go through an array, find the minimum value, and then return it
  minValue: function (array) {
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  },

  // Write a loop that will go through an array, find the average of all of the values, and then return it
  average: function (array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length
  },
}

console.log(someObject.sumRange(1,4));
console.log(someObject.minValue([20,1,4,2,30]));
console.log(someObject.average([1,4]));

var person = {
  name: "G-Unit",
  distance_traveled: 0,
  say_name: function () {
    console.log(name);
  },

  say_something: function (x) {
    console.log(person.name, "says", x);
  },

  walk: function () {
    console.log(person.name, 'is walking');
    person.distance_traveled += 3;
  },

  run: function () {
    console.log(person.name, 'is running');
    person.distance_traveled += 10;
  },

  crawl: function () {
    console.log(person.name, 'is crawling');
    person.distance_traveled +=1;
  },
}

console.log(person.say_something('I\'m hungry'));
console.log(person.run());
console.log(person.distance_traveled);
