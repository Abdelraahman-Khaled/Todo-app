const inputBox = document.getElementById("input-box");
const listContaienr = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContaienr.appendChild(li);
    let img = document.createElement("img");
    img.src = "./images/cancel.png";
    li.appendChild(img);
    li.classList.add("task");
    inputBox.value = "";
    saveData();
  }
}

listContaienr.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContaienr.innerHTML);
}
function showTask() {
  listContaienr.innerHTML = localStorage.getItem("data");
}
showTask();
