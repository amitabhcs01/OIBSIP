let tasks = [];

function addTask() {
  const taskInput = document.getElementById('new-task');
  const task = {
    id: Date.now(),
    content: taskInput.value,
    completed: false,
    createdAt: new Date().toLocaleString()
  };
  tasks.push(task);
  taskInput.value = '';
  renderTasks();
}

function toggleComplete(id) {
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  task.completedAt = new Date().toLocaleString();
  renderTasks();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function editTask(id) {
  const newContent = prompt('Edit your task:');
  const task = tasks.find(t => t.id === id);
  task.content = newContent;
  renderTasks();
}

function renderTasks() {
  const pendingTasksContainer = document.getElementById('pending-tasks');
  const completedTasksContainer = document.getElementById('completed-tasks');
  pendingTasksContainer.innerHTML = '';
  completedTasksContainer.innerHTML = '';

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = 'task' + (task.completed ? ' completed' : '');
    taskElement.innerHTML = `
      <span>${task.content} (added on ${task.createdAt})</span>
      <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
      <button onclick="editTask(${task.id})">Edit</button>
      <button onclick="deleteTask(${task.id})">Delete</button>
    `;
    if (task.completed) {
      completedTasksContainer.appendChild(taskElement);
    } else {
      pendingTasksContainer.appendChild(taskElement);
    }
  });
}

renderTasks();
    
