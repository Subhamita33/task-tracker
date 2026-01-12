let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const taskList = document.getElementById("taskList");

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const text = document.createElement("span");
        text.className = "task-text";
        text.textContent = task.name;

        const status = document.createElement("span");
        status.className = `status ${task.completed ? "completed" : "pending"}`;
        status.textContent = task.completed ? "Completed" : "Pending";

        const button = document.createElement("button");
        button.className = "complete-btn";
        button.textContent = "Mark Done";
        button.disabled = task.completed;

        button.onclick = () => markCompleted(index);

        li.appendChild(text);
        li.appendChild(status);
        li.appendChild(button);

        taskList.appendChild(li);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const input = document.getElementById("taskInput");
    const taskName = input.value.trim();

    if (taskName === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({ name: taskName, completed: false });
    input.value = "";
    renderTasks();
}

function markCompleted(index) {
    tasks[index].completed = true;
    renderTasks();
}

renderTasks();
