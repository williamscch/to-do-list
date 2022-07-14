import { addNewStorage, getTasks } from "../localStorage-functions";

const removeTask = (removeButton,task) => {
  removeButton.parentElement.remove();
  let tasksArray = getTasks();
  tasksArray.splice(task.index - 1, 1);
  tasksArray.forEach((task, index) => {
    task.index = index + 1;
  });
  addNewStorage(tasksArray);
}

export default  removeTask