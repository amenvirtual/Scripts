class Clinic {
  constructor(clinicName, location, mobileNumber) {
    this.clinicName = clinicName;
    this.location = location;
    this.mobileNumber = mobileNumber;
  }

  toString() {
    return `${this.clinicName}, ${this.location}, ${this.mobileNumber}`;
  }
}

module.exports = Clinic;
