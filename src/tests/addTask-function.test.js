/**
 * @jest-environment jsdom
 */

import addTaskScreen from '../modules/__mocks__/addTask-function.js';

const task1 = {
  description: 'Hola',
  completed: false,
  index: 1,
};

describe('Test Add Items', () => {
  document.body.innerHTML = '<div>'
  + '  <div id="list"></div>'
  + '</div>';

  test('Add one new item to the list', () => {
    // document.body.innerHTML = '<div>'
    //   + '  <div id="list"></div>'
    //   + '</div>';
    addTaskScreen(task1);
    expect(document.querySelectorAll('#list div')).toHaveLength(1);
  });

  test('Add one new item to the list', () => {
    addTaskScreen(task1);
    expect(document.querySelectorAll('#list div')).toHaveLength(2);
  });

  test('Add one new item to the list', () => {
    // document.body.innerHTML = '<div>'
    //   + '  <div id="list"></div>'
    //   + '</div>';
    addTaskScreen(task1);
    expect(document.querySelectorAll('#list div')).toHaveLength(3);
  });
});
