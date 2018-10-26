var module = (function() {
  function showName() {
    return "Rames";
  }
  function showLocation() {
    return showName() + "Chennai";
  }
  return {
    location: showLocation
  };
})();

var funcRef = module.location();
console.log(funcRef);
