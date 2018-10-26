export default class Clinic {
  constructor(clinicName, location, mobileNumber) {
    this._clinicName = clinicName;
    this._location = location;
    this._mobileNumber = mobileNumber;
  }

  set clinicName(clinicName) {
    if (clinicName.length > 9) {
      throw Error("Length should be less than 9");
    } else {
      this._clinicName = clinicName;
    }
  }

  get clinicName() {
    return this._clinicName.toUpperCase();
  }

  toString() {
    return `${this._clinicName}, ${this._location}, ${this._mobileNumber}`;
  }
}

//module.exports = Clinic;
