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

console.log("Task container:", taskContainer);

console.log("Total tasks element:", totalTasksElement);

console.log("Active tasks element:", activeTasksElement);

console.log("Completed tasks element:", completedTasksElement);
