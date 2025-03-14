let tasks = [
  { id: 1, description: "Hacer mercado", completed: false },
  { id: 2, description: "Estudiar para la prueba", completed: false },
  { id: 3, description: "Sacar a pasear a Tobby", completed: false },
];

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");


// BOTON DE AGREGAR
document.getElementById('addTaskBtn').addEventListener('click', () => {
    const taskDescription = taskInput.value.trim();
    if (taskDescription !== '') {
        const newTask = { id: tasks.length + 1, description: taskDescription, completed: false };
        tasks.push(newTask);
        taskInput.value = '';
        updateTaskList();
    }
});

// AGREGANDO  Y BORRANDO TAREAS 
function updateTaskList() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';
        li.innerHTML = `
            <span>${task.id} - ${task.description}</span>
            <div>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${index})">
                <button class="delete" onclick="deleteTask(${index})">X</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

function deleteTask(index) {
    tasks.splice(index, 1);
    updateTaskList();
}