import { getTasks, addNewStorage } from './localStorage-functions.js';

const editFunction = (task, taskLine, editField, description) => {
  const tasksArray = getTasks();
  tasksArray[task.index - 1].description = editField.value;
  addNewStorage(tasksArray);

  taskLine.replaceChild(description, editField);
  description.innerHTML = tasksArray[task.index - 1].description;
};

export default editFunction;