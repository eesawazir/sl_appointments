"use strict";

function displayPatients() {
  let patientTable = document
    .getElementById("patient-table")
    .getElementsByTagName("tbody")[0];

  let i = 1;
  while (i < localStorage.length + 1) {
    let patientKey = "patient" + i;

    if (patientKey) {
      let retrievedPatient = JSON.parse(localStorage.getItem(patientKey));
      let row = patientTable.insertRow(patientTable.length);

      if (retrievedPatient) {
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        let cell7 = row.insertCell(6);
        let cell8 = row.insertCell(7);
        let cell9 = row.insertCell(8);

        cell1.innerHTML = retrievedPatient.id;
        cell2.innerHTML = retrievedPatient.title;
        cell3.innerHTML = retrievedPatient.surName;
        cell4.innerHTML = retrievedPatient.firstName;
        cell5.innerHTML = retrievedPatient.address;
        cell6.innerHTML = retrievedPatient.phone;
        cell7.innerHTML = retrievedPatient.issue;
        cell8.innerHTML = retrievedPatient.moreInfo;
        cell9.innerHTML = `<a onClick="onUpdate(this)"><i class="material-icons-two-tone update-button">update</i></a>
        <a onClick="onDelete(this)"><i class="material-icons-two-tone delete-button">delete_outline</i></a>`;
      }
    }

    i += 1;
  }
}

function onUpdate(td) {
  let rowNum = td.parentElement.parentElement.rowIndex;
  sessionStorage.setItem("n", rowNum);
  window.location.href = "../health-issues/health-issues.html";
}

function onDelete(td) {
  if (confirm("Are you sure you want to delete this record ?")) {
    let rowNum = td.parentElement.parentElement.rowIndex;
    let localStorageLength = localStorage.length;
    localStorage.removeItem("patient" + rowNum);

    for (let i = rowNum + 1; i < localStorageLength + 1; i++) {
      let recordData = localStorage.getItem("patient" + i);
      localStorage.removeItem("patient" + i);
      localStorage.setItem("patient" + (i - 1), recordData);
    }
    document.getElementById("patient-table").deleteRow(rowNum);
  }
}

displayPatients();
