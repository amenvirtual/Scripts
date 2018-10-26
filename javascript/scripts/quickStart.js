var baseApp = {};

baseApp.show = function(msgHead, msgSub) {
  console.log("hello world");
  return function() {
    var majHead = document.getElementById("majorHeading");
    majHead.innerHTML = msgHead;
    var subHead = document.getElementById("subHeading");
    majHead.innerHTML = msgSub;
  };
};

baseApp.init = function() {
  //getElementById is a method
  var headBtn = document.getElementById("showHeading");
  var subdBtn = document.getElementById("showHeading");
  headBtn.addEventListener(
    "click",
    baseApp.show("Javascript Examples !!", "Closures")
  );
  //subBtn.addEventListener("Closures");
};

baseApp.init();
