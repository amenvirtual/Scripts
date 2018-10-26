(function() {
  var medicine = function(codeNumber, name, qty, rpu) {
    this.codeNumber = codeNumber;
    this.name = name;
    this.qty = qty;
    this.rpu = rpu;
  };

  medicine.prototype.calculate = function() {
    return this.qty * this.rpu;
  };

  var crocin = new medicine(101, "Crocin", 5, 20);
  var novalgin = new medicine(102, "Novalgin", 10, 2);
  var bcomplex = new medicine(103, "B Cozles", 32, 5);
  console.log(crocin.calculate());

  var medList = [crocin, novalgin, bcomplex];
  medList.forEach(function(eachItem, idx) {
    console.log(++idx);
    console.log(eachItem.calculate());
  });
})();
