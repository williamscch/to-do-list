const addTaskScreen = (task) => {
  const tasksList = document.getElementById('list');
  const taskLine = document.createElement('div');
  taskLine.classList.add('line');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  const description = document.createElement('h3');
  const options = document.createElement('span');
  const removeButton = document.createElement('span');
  removeButton.classList.add('delete');
  options.classList.add('options');

  description.innerHTML = task.description;
  options.innerHTML = '<i class="fa-solid fa-ellipsis-vertical"></i>';
  removeButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  tasksList.appendChild(taskLine);
  taskLine.append(checkBox, description, options, removeButton);
};

export default addTaskScreen;