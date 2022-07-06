import _ from "lodash";
import "./style.css";

const enterNewTask = document.querySelector(".enter");
let tasksArray = []

class Tasks {
  constructor(description, completed, index) {
    (this.description = description),
      (this.completed = completed),
      (this.index = index);
  }
}

const getTasks = () => {
  if (localStorage.getItem("tasks") === null) {
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem("tasks"));
  }
  return tasksArray;
};

const addTaskStorage = (task) => {
  tasksArray = getTasks();
  tasksArray.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasksArray));
};

// const removeTaskStorage = (bookdescription) => {
//     let tasksArray = getBooks();
//     tasksArray = tasksArray.filter((book) => book.description !== bookdescription);
//     localStorage.setItem('tasks', JSON.stringify(tasksArray));
//   }

const displayTasks = () => {
    tasksArray = getTasks();
    tasksArray.forEach((task) => addTaskScreen(task));
  };

const addTaskScreen = (task) => {
  const tasksList = document.getElementById('list');
  const taskLine = document.createElement("ul");
  const description = document.createElement("h3");
  const options = document.createElement("span");
  // const removeButton = document.createElement("span");
  // removeButton.classList.add("delete");

  description.innerHTML = `<input type='checkbox'>&nbsp&nbsp${task.description}`;
    options.innerHTML = `<i class="fa-solid fa-ellipsis-vertical"></i>`;
    // removeButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

  tasksList.appendChild(taskLine);
  taskLine.append(description, options);
};

// static removeBook(eTarget) {
//   if (eTarget.classList.contains('delete')) {
//     eTarget.parentElement.remove();
//   }
// }

enterNewTask.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault;
    const task = new Tasks(enterNewTask.value, false, tasksArray.length);
    addTaskStorage(task);
    addTaskScreen(task);
    enterNewTask.value = null;
  }
});

displayTasks();
