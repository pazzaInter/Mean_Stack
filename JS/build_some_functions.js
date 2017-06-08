function runningLogger() {
  console.log('I am running!');
}

runningLogger();

function multiplyByTen(x) {
  return 10 * x;
}

console.log(multiplyByTen(5));

function stringReturnOne() {
  return 'This is string one!'
}

function stringReturnTwo() {
  return 'This is string two!'
}

console.log(stringReturnOne());
console.log(stringReturnTwo());

function caller(x) {
  if (typeof(x) === 'function') {
    x();
  }
}

caller(function () {
  console.log('This should print.');
})

caller(3); // nothing should happen

function myDoubleConsoleLog(x, y) {
  if (typeof(x) === 'function' && typeof(y) === 'function') {
    console.log(x());
    console.log(y());
  }
}

myDoubleConsoleLog(stringReturnOne, stringReturnTwo)

function caller2(x) {
  console.log('starting');
  setTimeout(function () {
    if (typeof(x) === 'function') {
      x(stringReturnOne, stringReturnTwo);
    }
  }, 2000);
  console.log('ending?');
  console.log('interesting');
}

caller2(myDoubleConsoleLog);
