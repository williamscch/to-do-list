const clearAllCompleted = (tasksArray) => {
  tasksArray = JSON.parse(localStorage.getItem('tasks'));
  const newA = tasksArray.filter((e) => e.completed === false);
  tasksArray = newA;
  tasksArray.forEach((task, index) => {
    task.index = index + 1;
  });
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

export default clearAllCompleted;