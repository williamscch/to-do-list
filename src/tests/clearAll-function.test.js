/**
 * @jest-environment jsdom
 */

import { getTasks, addNewStorage } from '../modules/localStorage-functions.js';

let tasksArray = [
  {
    description: 'Hola',
    completed: false,
    index: 1,
  },
  {
    description: 'Hola',
    completed: false,
    index: 2,
  },
  {
    description: 'Hola',
    completed: false,
    index: 3,
  }];

addNewStorage(tasksArray);

const editFunction = (h3, task) => {
  tasksArray[task.index - 1].description = h3;
  localStorage.setItem('tasks', JSON.stringify(tasksArray));
};

document.body.innerHTML = '<div id="list"><div class="line"><input type="checkbox" class="check"><h3>hola</h3><span class="options"><i class="fa-solid fa-ellipsis-vertical"></i></span><span class="delete"><i class="fa-solid fa-trash-can"></i></span></div><div class="line"><input class="check" type="checkbox"><h3>david</h3><span class="options"><i class="fa-solid fa-ellipsis-vertical"></i></span><span class="delete"><i class="fa-solid fa-trash-can"></i></span></div></div><div id="clear-all">clear all</div>';

const checkBox = document.querySelector('.check');

const editCheckbox = (task) => {
  if (checkBox.checked) {
    tasksArray = getTasks();
    tasksArray[task.index - 1].completed = true;
    addNewStorage(tasksArray);
  } else {
    tasksArray = getTasks();
    tasksArray[task.index - 1].completed = false;
    addNewStorage(tasksArray);
  }
};

function clearComplete() {
  let taskArr = getTasks();
  taskArr = taskArr.filter((task) => task.completed === false);
  addNewStorage(taskArr);
  return taskArr;
}

checkBox.addEventListener('click', () => {
  editCheckbox(tasksArray[0]);
});

const clearAll = document.getElementById('clear-all');
clearAll.addEventListener('click', () => {
  tasksArray = clearComplete();
});

// tests
describe('Editing task description', () => {
  test('editing object from local storage', () => {
    editFunction('what', tasksArray[0]);
    expect(tasksArray[0].description).toBe('what');
  });

  test('Editing items completed status', () => {
    checkBox.click();
    expect(tasksArray[0].completed).toBe(true);
  });
});

describe('Editing task description', () => {
  test('testing clear all functionality', () => {
    clearAll.click();
    expect(tasksArray).toHaveLength(2);
  });
});
