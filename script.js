let arrList = [];
let selectedRowIndex = null;

function onFormSubmit() {
  let formData = readFormData();
  console.log(formData);

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
      html += `<td>${`<button onclick=onShift(${index},'Country') >Shift</button>`}</td>`;
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
      html += `<td>${`<button onclick=onShift(${index},'City') >Shift</button>`}</td>`;
      html += `</tr>`;
    });

  document.getElementById("cityTable").innerHTML = html;
}

function resetForm() {
  document.getElementById("form").reset();
  selectedRowIndex = null;
}

function onShift(index, type) {
  console.log(type);
  let arr = arrList.filter((data) => data.type == type);
  console.log(arr);

  if (arr[index].type === "Country") {
    arr[index].type = "City";
  } else {
    arr[index].type = "Country";
  }
  countryTable();
  cityTable();
}
