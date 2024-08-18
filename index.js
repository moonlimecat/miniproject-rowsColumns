let rows;
let columns;
let items;
let item;

const apply = document.getElementById("applyBtn");
const reset = document.getElementById("resetBtn");
const inputs = document.querySelectorAll("input");

function rowsAndColumns() {
  rows = document.getElementById("row").value;
  rows = Number(rows);
  columns = document.getElementById("column").value;
  columns = Number(columns);
  items = document.getElementById("items");
}

function toReset() {
  apply.style.display = "none";
  reset.style.display = "block";
}
function toApply() {
  apply.style.display = "block";
  reset.style.display = "none";
}

function toClear() {
  item = document.getElementById("item");
  item.onclick = function () {
    console.log("clicked");
  };
}

apply.onclick = function () {
  rowsAndColumns();
  if (!rows || !columns) {
    alert("please fill out the form");
  } else {
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        items.innerHTML += `
      <span id="item"></span>
      `;
      }
      items.innerHTML += "<br>";
    }
    toReset();
  }
};

reset.onclick = function () {
  toApply();
  inputs.forEach((input) => (input.value = ""));
  items.innerHTML = " ";
};
