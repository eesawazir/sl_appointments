"use strict";

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Start");
  if (sessionStorage.getItem("n")) {
    console.log("If n");
    let patient = JSON.parse(
      localStorage.getItem("patient" + sessionStorage.getItem("n"))
    );
    console.log(patient);
    document.getElementById("title").value = patient.title;
    document.getElementById("surname").value = patient.surName;
    document.getElementById("first-name").value = patient.firstName;
    document.getElementById("address").value = patient.address;
    document.getElementById("phone").value = patient.phone;
    document.getElementById("issue").value = patient.issue;
    document.getElementById("more-info").value = patient.moreInfo;
  }
  console.log("End");
});

function onSubmit() {
  const patient = {
    title: document.getElementById("title").value,
    surName: document.getElementById("surname").value,
    firstName: document.getElementById("first-name").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    issue: document.getElementById("issue").value,
    moreInfo: document.getElementById("more-info").value,
  };

  const updateRow = sessionStorage.getItem("n");
  if (updateRow) {
    if (validateForm(patient)) {
      const p = JSON.parse(localStorage.getItem("patient" + updateRow));
      patient.id = p.id;
      const patientString = JSON.stringify(patient);
      localStorage.setItem("patient" + updateRow, patientString);
      sessionStorage.clear();
      return true;
    }
  }

  if (validateForm(patient)) {
    let idNum = 1;
    if (localStorage.length > 0) {
      idNum = JSON.parse(
        localStorage.getItem("patient" + localStorage.length)
      ).id;
      idNum += 1;
    }

    patient.id = idNum;
    const patientString = JSON.stringify(patient);
    localStorage.setItem("patient" + (localStorage.length + 1), patientString);

    return true;
  } else {
    alert("Please fill in all the fields");
    return false;
  }
}

function validateForm(patientInfo) {
  if (
    patientInfo["title"] === "Select" ||
    patientInfo["surName"] === "" ||
    patientInfo["firstName"] === "" ||
    patientInfo["address"] === "" ||
    patientInfo["phone"] === "" ||
    patientInfo["issue"] === "Select" ||
    patientInfo["moreInfo"] === ""
  ) {
    return false;
  } else {
    return true;
  }
}

// function RNG(rngMaxRange) {
//   return Math.floor(Math.random() * rngMaxRange) + 1;
// }

//Duplicate ID problem using RNG (attempt)
// const idList = new Map();
// if (validateForm(patient)) {
//   let rngMaxRange = 100000;

//   while (localStorage.length > rngMaxRange) {
//     rngMaxRange *= 2;
//   }

//   let idNum = RNG(rngMaxRange);

//   if (!idList.get(idNum)) {
//     idList.set(idNum, 1);
//   } else {
//     while (idList.idNum) {
//       idNum = RNG(rngMaxRange);
//     }
//   }

//   const patientString = JSON.stringify(patient);
//   localStorage.setItem("patient" + idNum, patientString);
//   return true;
// } else {
//   alert("Please fill in all the fields");
//   return false;
// }
