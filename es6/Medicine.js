class Medicine {
  constructor(code, name, qty, rate) {
    this._code = code;
    this._name = name;
    this._qty = qty;
    this._rate = rate;
  }

  calculate() {
    return `${this._qty * this._rate}`;
  }

  toString() {
    return `${this.code}, ${this.name}, ${this.qty}, ${this.rate}`;
  }
}

module.exports = Medicine;
