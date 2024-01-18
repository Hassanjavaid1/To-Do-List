let btn = document.getElementById("btn");
let userInput = document.getElementById("input");
let task_list = document.getElementById("task_list");
btn.addEventListener("click", () => {
  if (userInput.value == "") {
    alert("You must add atleast one task");
  } else {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.innerHTML = userInput.value;
    task_list.appendChild(li);
    li.appendChild(span);
  }
  userInput.value = "";
  localStorageData();
});

function submitForm(event) {
  event.preventDefault();
}

const localStorageData = () => {
  let result = localStorage.setItem("items", task_list.innerHTML);
  console.log(result);
};
const showLocalStorageData = () => {
  task_list.innerHTML = localStorage.getItem("items");
};
showLocalStorageData();
task_list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      e.target.parentElement.classList.toggle("completedTask");
    } else if (e.target.tagName === "LI") {
      e.target.classList.toggle("completedTask");
    }
  },
  false
);
let date_obj = document.getElementById("date");
let date = new Date();
let convertDate = date.toDateString();
date_obj.innerHTML = convertDate;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////