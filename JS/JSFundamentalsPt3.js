var person = {
  name: "G-Unit",
  distance_traveled: 0,
  say_name:() => {
    console.log(person.name);
    return person
  },

  say_something:(x) => {
    console.log(`${ person.name } says ${ x }`);
    return person
  },

  walk:() => {
    console.log(`${ person.name } is walking`);
    person.distance_traveled += 3;
    return person
  },

  run:() => {
    console.log(`${ person.name } is running`);
    person.distance_traveled += 10;
    return person
  },

  crawl:() => {
    console.log(`${ person.name } is crawling`);
    person.distance_traveled +=1;
    return person
  },
}

const personConstructor = (name) => {
  person.name = name
  return person;
}

const mauro = personConstructor('Mauro');

console.log(mauro.run().crawl().distance_traveled);

function ninjaConstructor(name, cohort) {
  const ninja = {
    name: name,
    cohort: cohort,
    beltLevel: 'Yellow Belt',
    levelUp: function () {
      if (ninja.beltLevel === 'Yellow Belt') {
        ninja.beltLevel = 'Red Belt'
        console.log('You have moved up to a Red Belt');
      }else if (ninja.beltLevel === 'Red Belt') {
        ninja.beltLevel = 'Black Belt'
        console.log('You have moved up to a Black Belt');
      }
      else {
        console.log('You have already achieved greatness');
      }
      return ninja
    }
  }
  return ninja
}

const karateKid = ninjaConstructor('Migos', 'January')

console.log(karateKid);
console.log(karateKid.levelUp().levelUp().name);
