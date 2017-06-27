var someObject = {
  // Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
  sumRange: (x,y) => {
    let sum = 0;
    for (let i = x; i <= y; i++) {
      sum += i;
    }
    console.log(sum);
  },

  // Write a loop that will go through an array, find the minimum value, and then return it
  minValue: (array) => {
    let min = array[0]
    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) {
        min = array[i];
      }
    }
    return min;
  },

  // Write a loop that will go through an array, find the average of all of the values, and then return it
  average: (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum/array.length
  },
}

console.log(someObject.sumRange(1,2));
console.log(someObject.minValue([20,1,4,2,30]));
console.log(someObject.average([1,4]));

var person = {
  name: "G-Unit",
  distance_traveled: 0,
  say_name: () => console.log(person.name),

  say_something: (x) => {
    console.log(`${ person.name } says ${ x }`);
    return person
  },

  walk: () => {
    console.log(`${ person.name } is walking`);
    person.distance_traveled += 3;
    return person
  },

  run: () => {
    console.log(`${ person.name } is running`);
    person.distance_traveled += 10;
    return person
  },

  crawl: () => {
    console.log(`${ person.name } is crawling`);
    person.distance_traveled +=1;
    return person
  },
}

person.say_name();
person.say_something('I\'m hungry');
console.log(person.run());
console.log(person.distance_traveled);
