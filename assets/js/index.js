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
