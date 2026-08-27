let tasks = [
  {
    id: 1,
    title: "Study JavaScript",
    completed: false,
  },
  {
    id: 2,
    title: "Complete frontend assignment",
    completed: false,
  },
  {
    id: 3,
    title: "Practice DOM manipulation",
    completed: true,
  },
  {
    id: 4,
    title: "Review JavaScript events",
    completed: false,
  },
  {
    id: 5,
    title: "Build a small frontend project",
    completed: true,
  },
  {
    id: 6,
    title: "Push project to GitHub",
    completed: false,
  },
];

const taskContainer = document.getElementById("taskContainer");

const totalTasksElement = document.getElementById("totalTasks");

const activeTasksElement = document.getElementById("activeTasks");

const completedTasksElement = document.getElementById("completedTasks");

function renderTasks() {
  taskContainer.innerHTML = "";

  tasks.forEach(function (task) {
    const taskElement = document.createElement("div");

    
taskElement.className = "task-item";

const taskContent = document.createElement("div");

taskContent.className = "task-content";

const checkbox = document.createElement("input");

checkbox.type = "checkbox";

checkbox.className = "task-checkbox";

checkbox.checked = task.completed;

const taskTitle = document.createElement("span");

taskTitle.className = "task-title";

taskTitle.textContent = task.title;

const taskActions = document.createElement("div");

taskActions.className = "task-actions";

const editButton = document.createElement("button");

editButton.type = "button";

editButton.className = "btn btn-sm btn-outline-secondary";

editButton.textContent = "Edit";

const deleteButton = document.createElement("button");

deleteButton.type = "button";

deleteButton.className = "btn btn-sm btn-outline-danger";

deleteButton.textContent = "Delete";

taskContent.append(checkbox);

taskContent.append(taskTitle);

taskActions.append(editButton);

taskActions.append(deleteButton);

taskElement.append(taskContent);

taskElement.append(taskActions);

taskContainer.append(taskElement);
;
  });
}

renderTasks();
