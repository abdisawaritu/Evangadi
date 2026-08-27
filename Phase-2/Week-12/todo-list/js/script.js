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

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskError = document.getElementById("taskError");
const taskContainer = document.getElementById("taskContainer");
const emptyState = document.getElementById("emptyState");

const totalTasksElement = document.getElementById("totalTasks");
const activeTasksElement = document.getElementById("activeTasks");
const completedTasksElement = document.getElementById("completedTasks");

function updateStatistics() {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(function (task) {
    return task.completed === true;
  }).length;

  const activeTasks = tasks.filter(function (task) {
    return task.completed === false;
  }).length;

  totalTasksElement.textContent = totalTasks;
  activeTasksElement.textContent = activeTasks;
  completedTasksElement.textContent = completedTasks;
}

function createTaskElement(task) {
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

  if (task.completed === true) {
    taskTitle.classList.add("completed");
  }

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

  taskContent.appendChild(checkbox);
  taskContent.appendChild(taskTitle);

  taskActions.appendChild(editButton);
  taskActions.appendChild(deleteButton);

  taskElement.appendChild(taskContent);
  taskElement.appendChild(taskActions);

  return taskElement;
}

function renderTasks() {
  taskContainer.innerHTML = "";

  if (tasks.length === 0) {
    emptyState.style.display = "block";
    updateStatistics();
    return;
  }

  emptyState.style.display = "none";

  tasks.forEach(function (task) {
    const taskElement = createTaskElement(task);

    taskContainer.appendChild(taskElement);
  });

  updateStatistics();
}

function showTaskError(message) {
  taskError.textContent = message;

  taskInput.classList.add("is-invalid");
}

function clearTaskError() {
  taskError.textContent = "";

  taskInput.classList.remove("is-invalid");
}

function addTask(event) {
  event.preventDefault();

  clearTaskError();

  const taskTitle = taskInput.value.trim();

  if (taskTitle === "") {
    showTaskError("Please enter a task.");

    taskInput.focus();

    return;
  }

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    completed: false,
  };

  tasks.push(newTask);

  taskInput.value = "";

  clearTaskError();

  renderTasks();

  taskInput.focus();
}

taskForm.addEventListener("submit", addTask);

renderTasks();
