const tasks = document.getElementById("tasks");
const addTaskWindow = document.getElementById("addTaskWindow");
const inputTaskName = document.getElementById("taskName")
addTaskWindow.style.display = "none";

tasks.addEventListener("click", event => {
    event.target.remove();
});

document.getElementById("button").addEventListener("click", () => {
    if (addTaskWindow.style.display == "none") {
        addTaskWindow.style.display = "flex";
    } else {
        addTaskWindow.style.display = "none";
    }
    inputTaskName.value = "";
});

document.getElementById("submitButton").addEventListener("click", () => {
    let taskName = document.createElement("li");
    taskName.textContent = inputTaskName.value;
    tasks.append(taskName);
    addTaskWindow.style.display = "none";
});

document.getElementById("cancelButton").addEventListener("click", () => {
    addTaskWindow.style.display = "none";
})