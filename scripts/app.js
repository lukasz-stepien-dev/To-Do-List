const tasks = document.getElementById("tasks");
const addButton = document.getElementById("button");

function deleteTask(event) {
    event.target.remove();
}

tasks.addEventListener("click", deleteTask);