// Update the task counter based on the li added
function updateTaskCounter() {
  var taskCounter = document.getElementById("task-counter");
  var tasks = document.querySelectorAll("#task-list li");
  taskCounter.textContent = "Total tasks: " + tasks.length;
}

// Function to add tasks
function addTask() {
  var taskInput = document.getElementById("new-task");
  var taskList = document.getElementById("task-list");
  var newTask = taskInput.value;
  if (newTask) {
    var li = document.createElement("li");
    li.className = "task-item";

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        li.classList.add("completed");
      } else {
        li.classList.remove("completed");
      }
    });

    var taskContent = document.createElement("span");
    taskContent.textContent = newTask;

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
      li.classList.add("fade-out");
      setTimeout(() => {
        taskList.removeChild(li);
        updateTaskCounter();
      }, 500);
    });

    li.appendChild(checkbox);
    li.appendChild(taskContent);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    li.classList.add("fade-in");

    taskInput.value = "";

    updateTaskCounter();
  }
}

// Add the task after Enter as well
var taskInput = document.getElementById("new-task");
taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

// Add task by clicking add button
var addTaskBtn = document.getElementById("add-task-btn");
addTaskBtn.addEventListener("click", addTask);

// Initial value of the task counter
updateTaskCounter();
