import './style.css';
import addTaskScreen from './modules/addTask-function.js';
import Tasks from './modules/obj-constructor.js';
import { getTasks, addTaskStorage } from './modules/localStorage-functions.js';

const enterNewTask = document.querySelector('.enter');
let tasksArray = [];

const displayTasks = () => {
  tasksArray = getTasks();
  tasksArray.forEach((task) => addTaskScreen(task));
};

enterNewTask.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    tasksArray = getTasks();
    const task = new Tasks(enterNewTask.value, false, tasksArray.length + 1);
    addTaskStorage(task);
    addTaskScreen(task);
    enterNewTask.value = null;
  }
});

displayTasks();
