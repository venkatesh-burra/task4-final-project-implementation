let taskList = JSON.parse(localStorage.getItem('tasks')) || [];

function renderTasks() {
  const ul = document.getElementById('taskList');
  ul.innerHTML = '';
  taskList.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task;
    li.onclick = () => removeTask(index);
    ul.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task) {
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    renderTasks();
    input.value = '';
  }
}

function removeTask(index) {
  taskList.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(taskList));
  renderTasks();
}

renderTasks();
