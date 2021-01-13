import { renderListItems } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { createTask, getTasksList } from './tasksGateway.js';

export const onCreateTask = () => {
  const inputEl = document.querySelector('.task-input');

  const text = inputEl.value;

  if (!text) {
    return;
  }

  inputEl.value = '';

  const newTask = {
    text,
    done: false,
  };

  createTask(newTask)
    .then(() => getTasksList())
    .then(newTasksList => {
      setItem('tasksList', newTasksList);
      renderListItems();
    });
};

// 1. Prepare data
// 2. Write data to data base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
