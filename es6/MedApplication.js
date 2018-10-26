var Medicine = require("./Medicine");

let crocin = new Medicine(101, "Crocin", 5, 20);
let novalgin = new Medicine(102, "Novalgin", 10, 2);
let bcomplex = new Medicine(103, "B Cozles", 32, 5);

const medList = [crocin, novalgin, bcomplex];
medList.forEach(function(eachItem, idx) {
  console.log(++idx);
  console.log(eachItem.calculate());
});
