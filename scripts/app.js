const tasks = document.getElementById("tasks");

function deleteTask(event) {
    event.target.remove();
}

tasks.addEventListener("click", deleteTask, false);