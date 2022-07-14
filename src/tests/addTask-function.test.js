/**
 * @jest-environment jsdom
 */
import addTaskScreen from '../modules/addTask-function';
import { addTaskStorage, getTasks } from '../modules/localStorage-functions';
import removeTask from '../modules/__mocks__/addTask-function';

// create a task item
const task1 = {
  description: 'Hola',
  completed: false,
  index: 1,
  }

const task2 = {
  description: 'Hola',
  completed: false,
  index: 2,
  }

const task3 = {
  description: 'Hola',
  completed: false,
  index: 3,
  };


// cretae an array item to store the tasks

const arr = [];

// create the inviroment for the tests

document.body.innerHTML = '<div>'
+ '  <div id="list"></div>'
+ '</div>'
+ '<div class="clear"></div>';

// tests the add functions

describe('Test Add Items', () => {

  test('Add one new item to the list', () => {
    // push the task to the array
    arr.push(task1)
    // add the task to the div
    addTaskScreen(task1);
    // add the task to the storage
    addTaskStorage(task1);
    // expect a certain length
    expect(document.querySelectorAll('#list div')).toHaveLength(1);
  });

  test('Add one new item to the list', () => {
    // push the task to the array
    arr.push(task2)
    // add the task to the div
    addTaskScreen(task2);
    // add the task to the storage
    addTaskStorage(task2);
    // expect a certain length
    expect(document.querySelectorAll('#list div')).toHaveLength(2);
  });

  test('Add one new item to the list', () => {
    // push the task to the array
    arr.push(task3)
    // add the task to the div
    addTaskScreen(task3);
    // add the task to the storage
    addTaskStorage(task3);
    // expect a certain length
    expect(document.querySelectorAll('#list div')).toHaveLength(3);
  });

  test('check storage', () => {
    // grab the items from the storage
    let storage = getTasks();
    // expect a certain length
    expect(storage).toHaveLength(3);
  });
});

// test the delete functions 

describe('Test delete Items', () => {

  test('delete one item to the list', () => {
    // grab all the deletes buttons on the div
    let deleteBtn = document.querySelectorAll('#list div .delete');
    // acivating the function directly
    removeTask(deleteBtn[1],arr[1])
    // expect a certain length
    expect(document.querySelectorAll('#list div')).toHaveLength(2);
  });

  test('delete one item to the list', () => {
    // grab all the deletes buttons on the div
    let deleteBtn = document.querySelectorAll('#list div .delete');
    // acivating the function directly
    removeTask(deleteBtn[1],arr[1])
    // expect a certain length
    expect(document.querySelectorAll('#list div')).toHaveLength(1);
  });

  test('check storage', () => {
    // grab the items from the storage
    let storage = getTasks();
    // expect a certain length
    expect(storage).toHaveLength(1);
  });
});
