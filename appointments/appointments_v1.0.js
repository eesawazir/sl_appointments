"use strict";

function displayPatients() {
  let patientTable = document.getElementById("patient-table");

  for (let i = 1; i < localStorage.length + 1; i++) {
    let retrievedPatient = JSON.parse(localStorage.getItem("patient" + i));
    console.log(retrievedPatient);
    if (retrievedPatient) {
      patientTable.innerHTML +=
        "<tr><td>" +
        retrievedPatient.title +
        "</td><td>" +
        retrievedPatient.surName +
        "</td><td>" +
        retrievedPatient.firstName +
        "</td><td>" +
        retrievedPatient.address +
        "</td><td>" +
        retrievedPatient.phone +
        "</td><td>" +
        retrievedPatient.issue +
        "</td><td>" +
        retrievedPatient.moreInfo +
        "</td><td>" +
        `<a onClick="onUpdate(this)"><i class="material-icons-two-tone update-button">update</i></a>
      <a onClick="onDelete(this)"><i class="material-icons-two-tone delete-button">delete_outline</i></a>` +
        "</td></tr>";
    }
  }
}

// function onUpdate(td) {
//   selectedRow = td.parentElement.parentElement;
//   document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
//   document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
//   document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
//   document.getElementById("city").value = selectedRow.cells[3].innerHTML;
// }
// function updateRecord(formData) {
//   selectedRow.cells[0].innerHTML = formData.fullName;
//   selectedRow.cells[1].innerHTML = formData.empCode;
//   selectedRow.cells[2].innerHTML = formData.salary;
//   selectedRow.cells[3].innerHTML = formData.city;
// }

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    let row = td.parentElement.parentElement;
    document.getElementById("patient-table").deleteRow(row.rowIndex);
  }
}

displayPatients();
