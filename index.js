let rows;
let columns;
let circleHome;

const apply = document.getElementById("applyBtn");
const reset = document.getElementById("resetBtn");
const inputs = document.querySelectorAll("input");
apply.innerHTML = "Apply";

function rowsAndColumns() {
  rows = document.getElementById("row").value;
  rows = Number(rows);
  columns = document.getElementById("column").value;
  columns = Number(columns);
  circleHome = document.getElementById("circleHome");
}

function toReset() {
  apply.style.display = "none";
  reset.style.display = "block";
}
function toApply() {
  apply.style.display = "block";
  reset.style.display = "none";
}

apply.onclick = function () {
  rowsAndColumns();
  if (rows == " " || columns == " ") {
    alert("please fill out the form");
  } else {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        circleHome.innerHTML += `
      <span id="circle"> </span>
      `;
      }
      circleHome.innerHTML += "<br>";
    }
    toReset();
  }
};

reset.onclick = function () {
  toApply();
  inputs.forEach((input) => (input.value = ""));
  circleHome.innerHTML = " ";
};
