import { getTasks, addNewStorage } from './localStorage-functions.js';

let tasksArray = [];

const clearAllCompleted = () => {
  tasksArray = getTasks();
  const newA = tasksArray.filter((e) => e.completed === false);
  tasksArray = newA;
  tasksArray.forEach((task, index) => {
    task.index = index + 1;
  });
  addNewStorage(tasksArray);
};

export default clearAllCompleted;
