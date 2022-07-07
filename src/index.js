import './style.css';

const enterNewTask = document.querySelector('.enter');
let tasksArray = [];

class Tasks {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

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
        // tasksArray = JSON.parse(localStorage.getItem('tasks'));
        tasksArray[task.index].description = editField.value;
        localStorage.setItem('tasks', JSON.stringify(tasksArray));

        taskLine.replaceChild(description, editField);
        description.innerHTML = task.description;
        taskLine.classList.remove('active');
        options.classList.remove('active');
        removeButton.classList.remove('active');
      }
    });

    removeButton.addEventListener('click', () => {
      removeButton.parentElement.remove();
      tasksArray.splice(task.index, 1);
      tasksArray.forEach((task, index) => {
        task.index = index;
      });
      localStorage.setItem('tasks', JSON.stringify(tasksArray));
    });
  });
};

const displayTasks = () => {
  tasksArray = getTasks();
  tasksArray.forEach((task) => addTaskScreen(task));
};

enterNewTask.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    // eslint-disable-next-line no-unused-expressions
    e.preventDefault;
    const task = new Tasks(enterNewTask.value, false, tasksArray.length);
    addTaskStorage(task);
    addTaskScreen(task);
    enterNewTask.value = null;
  }
});

displayTasks();
