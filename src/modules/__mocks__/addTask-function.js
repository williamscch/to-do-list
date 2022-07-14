import { addNewStorage, getTasks } from '../localStorage-functions.js';

const removeTask = (removeButton, task) => {
  removeButton.parentElement.remove();
  const tasksArray = getTasks();
  tasksArray.splice(task.index - 1, 1);
  tasksArray.forEach((task, index) => {
    task.index = index + 1;
  });
  addNewStorage(tasksArray);
};

export default removeTask;