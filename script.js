// Wait for the HTML document to fully load before running the script 
document.addEventListener('DOMContentLoaded', () => {
    // ==============================================
    // 1. Select DOM Elements
    // ==============================================
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // Task list container

    // ==============================================
    // 2. Load Tasks from Local Storage on Page Load
    // ==============================================
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // false = don't re-save while loading
    }

    // ==============================================
    // 3. Define addTask Function
    // ==============================================
    function addTask(taskText = taskInput.value.trim(), save = true) {
        // Validate input
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create task list item
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.classList.add("remove-btn");


        // Remove button logic
        removeBtn.onclick = function() {
            taskList.removeChild(li);
            removeTask(taskText);
        };

        // Append elements
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Save to Local Storage if applicable
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // ==============================================
    // 4. Define removeTask Function
    // ==============================================
    function removeTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        const updatedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    // ==============================================
    // 5. Event Listeners
    // ==============================================
    addButton.addEventListener('click', () => addTask());
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ==============================================
    // 6. Load Tasks When Page Opens
    // ==============================================
    loadTasks();
});
