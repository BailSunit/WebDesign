//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return (this.mytitle);
}

var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

function selectedEntry(checkbox) {
  let row = checkbox.parentElement.parentElement;
  if (checkbox.checked == true) {
    document.getElementById("button").disabled = false;
    document.getElementById("button").style.backgroundColor = "orange";
    row.style.backgroundColor = "orange";

    let buttonList = document.createElement("td");
    buttonList.innerHTML = '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button><div class="popup"><button id="edit" type="button" onclick="editRow(this)">Edit</button><span class="popuptext" id="myPopup">Edit your details</span></div>';

    row.appendChild(buttonList);
  }
  else {
    document.getElementById("button").disabled = true;
    document.getElementById("button").style.backgroundColor = "gray";
    row.style.backgroundColor = "white";
    row.deleteCell(8);
  }
}

function deleteRow(obj) {
  var tr = obj.parentElement.parentElement;
  document.getElementById("myTable").deleteRow(tr.rowIndex);
  alert("Deleting Student Record data");
}

function editRow(obj) {
  alert("Edit your details");
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

function expandEntry(obj) {
  var parentTd = obj.parentNode;
  var parentTr = parentTd.parentNode;
  var nextSib = parentTr.nextElementSibling;
  if (nextSib.className === "viewMore") {
    nextSib.className = "dropDownTextArea";
  }
  else if (nextSib.className === "dropDownTextArea") {
    nextSib.className = "viewMore";
  }
}

var studentCount = 3;

function newStudent() {

  var table = document.getElementById("myTable");
  var row = document.createElement("tr");
  var checkCell = document.createElement("td");
  checkCell.innerHTML =
    '<input id="checkbox" type="checkbox" onclick="selectedEntry(this)"/><br/><br/><img src="down.png" width="25px" onclick="expandEntry(this)"/>';
  var stuCell = document.createElement("td");
  stuCell.innerHTML = "Student " + ++studentCount;
  var advCell = document.createElement("td");
  advCell.innerHTML = "Teacher " + studentCount;
  var staCell = document.createElement("td");
  staCell.innerHTML = "Approved";
  var semCell = document.createElement("td");
  semCell.innerHTML = "Fall";
  var typCell = document.createElement("td");
  typCell.innerHTML = "TA";
  var budCell = document.createElement("td");
  budCell.innerHTML = "12345";
  var perCell = document.createElement("td");
  perCell.innerHTML = "100%";
  row.appendChild(checkCell);
  row.appendChild(stuCell);
  row.appendChild(advCell);
  row.appendChild(staCell);
  row.appendChild(semCell);
  row.appendChild(typCell);
  row.appendChild(budCell);
  row.appendChild(perCell);
  table.appendChild(row);
  var row2 = document.createElement("tr");
  row2.setAttribute("class", "dropDownTextArea");
  var cell = document.createElement("td");
  cell.colSpan = 8;
  cell.innerHTML = 'Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />';
  row2.appendChild(cell);
  table.appendChild(row2);
}

var t = new Title("CONNECT WITH ME!");