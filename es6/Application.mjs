//var Clinic = require("./Clinicnode");
import Clinic from "./Clinic.mjs";
let polyClinic = new Clinic("Ramesh Poly Clinic", "Chennai", "1234567890");

class Application {
  static showClinics(clinicList) {
    for (var i = 0; i < clinicList.length; i++) {
      console.log(clinicList[i].toString());
    }
    console.log("Value of i :" + i);
  }

  static main() {
    console.log(polyClinic.toString());
    console.log(polyClinic.clinicName);
    //polyClinic.clinicName = "Suresh Poly Clinic";
    let polyClinic1 = new Clinic("Ramesh Poly Clinic", "Chennai", "1234567890");
    let polyClinic2 = new Clinic("Suresh Poly Clinic", "Chennai", "1234567890");
    let polyClinic3 = new Clinic("Rajesh Poly Clinic", "Chennai", "1234567890");

    const clinicList = [polyClinic1, polyClinic2, polyClinic3];

    Application.showClinics(clinicList);
  }
}

Application.main();
