let arrList = [];
let selectedRowIndex = null;

function onFormSubmit() {
  let formData = readFormData();
  console.log(formData);
  // console.log(formData.name);
  // console.log(formData.type);

  arrList.push(formData);

  countryTable();
  cityTable();

  resetForm();
}

function readFormData() {
  let formData = {};
  formData.name = document.getElementById("name").value;
  formData.type = document.getElementById("type").value;
  return formData;
}

function countryTable() {
  let html = "";
  document.getElementById("countryTable").innerHTML = "";

  arrList
    .filter((data) => data.type == "Country")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<button onclick=onShift(${index}) >Shift</button>`}</td>`;
      html += `</tr>`;
    });

  document.getElementById("countryTable").innerHTML = html;
}

function cityTable() {
  let html = "";
  document.getElementById("cityTable").innerHTML = "";

  arrList
    .filter((data) => data.type == "City")
    .forEach((element, index) => {
      html += `<tr>`;
      html += `<td>${element.name}</td>`;
      html += `<td>${`<button onclick=onShift(${index}) >Shift</button>`}</td>`;
      html += `</tr>`;
    });

  document.getElementById("cityTable").innerHTML = html;
}

function resetForm() {
  document.getElementById("form").reset();
  selectedRowIndex = null;
}

// function onEdit(index) {
//   selectedRowIndex = index;
//   let selectedRow = arrList[index];
//   document.getElementById("country").value = selectedRow.country;
//   document.getElementById("city").value = selectedRow.city;
// }

// function updateData(formData) {
//   arrList[selectedRowIndex] = formData;
//   updateTable();
//   selectedRowIndex = null;
// }

// function onDelete(index) {
//   if (confirm("Are you sure you want to delete")) {
//     arrList.splice(index, 1);
//     updateTable();
//     resetForm();
//   }
// }

function onShift(index) {}
