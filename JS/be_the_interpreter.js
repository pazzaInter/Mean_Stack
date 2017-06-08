// Problem 1:
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//   first_variable = "Not anymore!!!";
//   console.log(first_variable);
// }
// console.log(first_variable);

// written as interpreter would order
var first_variable;
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable);
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

// Problem 2:
// var food = "Chicken";
// function eat() {
//   food = "half-chicken";
//   console.log(food);
//   var food = "gone";       // CAREFUL!
//   console.log(food);
// }
// eat();
// console.log(food);

// written as interpreter would order
var food;
food = "Chicken";
function eat() {
  var food;
  food = "half-chicken";
  console.log(food);
  food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);

// Problem 3:
// var new_word = "NEW!";
// function lastFunc() {
//   new_word = "old";
// }
// console.log(new_word);

// written as interpreter would order
var new_word;
new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word);