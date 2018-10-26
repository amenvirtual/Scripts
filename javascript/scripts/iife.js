//IIFE
var counter = 10;
var funcRef = (function() {
  counter = 5; //free variable
  return function() {
    //anonymous function
    return counter++;
  };
})();

var increment = funcRef;
console.log(increment());
console.log(increment());
console.log(increment());
