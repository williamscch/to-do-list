// import tasksArray from './module3.js';
// import Tasks from './module3.js';

let tasksArray = [];

const addTaskScreen = (task) => {
  const tasksList = document.getElementById('list');
  const taskLine = document.createElement('ul');
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

  taskLine.addEventListener('click', () => {
    options.classList.add('active');
    removeButton.classList.add('active');
    taskLine.classList.add('active');

    const editField = document.createElement('input');
    editField.classList.add('edit-input');
    editField.value = description.textContent;
    taskLine.replaceChild(editField, description);

    editField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        tasksArray = JSON.parse(localStorage.getItem('tasks'));
        tasksArray[task.index].description = editField.value;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));

        taskLine.replaceChild(description, editField);
        description.innerHTML = tasksArray[task.index].description;
        taskLine.classList.remove('active');
        options.classList.remove('active');
        removeButton.classList.remove('active');
      }
    });

    removeButton.addEventListener('click', () => {
      removeButton.parentElement.remove();
      tasksArray = JSON.parse(localStorage.getItem('tasks'));
      tasksArray.splice(task.index, 1);
      tasksArray.forEach((task, index) => {
        task.index = index;
      });
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    });
  });
};

export default addTaskScreen;