let tasksArray = [];

const getTasks = () => {
  if (localStorage.getItem('tasks') === null) {
    tasksArray = [];
  } else {
    tasksArray = JSON.parse(localStorage.getItem('tasks'));
  }
  return tasksArray;
};

const addTaskStorage = (task) => {
  tasksArray = getTasks();
  tasksArray.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

const addNewStorage = (entryOne) => {
  localStorage.setItem('tasks', JSON.stringify(entryOne));
};

export {
  getTasks, addTaskStorage, addNewStorage,
};
