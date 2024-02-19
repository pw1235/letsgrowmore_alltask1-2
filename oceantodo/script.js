const taskList = document.getElementById("task-list");
const addTaskButton = document.getElementById("add-task");
const newTaskInput = document.getElementById("new-task");

let tasks = [];

function addTask() {
    const task = newTaskInput.value.trim();
    if (task) {
        tasks.push(task);
        displayTasks();
        newTaskInput.value = "";
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const listItem = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        const taskText = document.createTextNode(task);
        listItem.appendChild(checkbox);
        listItem.appendChild(taskText);
        taskList.appendChild(listItem);
    });
}

addTaskButton.addEventListener("click", addTask);

// Load any previously saved tasks
// Example using local storage:
const storedTasks = JSON.parse(localStorage.getItem("tasks"));
if (storedTasks) {
    tasks = storedTasks;
    displayTasks();
}
