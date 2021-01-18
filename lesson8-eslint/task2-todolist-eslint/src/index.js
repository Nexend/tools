import { initTodoListHandlers } from './list/todoList';
import { renderListItems } from './list/renderer';
import { getTasksList } from './list/tasksGateway';
import { setItem } from './list/storage';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  getTasksList().then((tasksList) => {
    setItem('tasksList', tasksList);
    renderListItems();
  });
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key === 'tasksList') {
    renderListItems();
  }
};

window.addEventListener('storage', onStorageChange);

// 1. Get data from server
// 2. Save data to front-end storage
