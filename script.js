document.addEventListener("DOMContentLoaded", () => {
    // DOM elements (adjust IDs if your HTML uses different ones)
    const form = document.getElementById("task-form");
    const input = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage and render them
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // don't save while loading
    }

    // Save an array of tasks (strings) to Local Storage
    function saveTasks(tasksArray) {
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }

    // Get current tasks array from Local Storage (always returns an array)
    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    // Create a task DOM element and optionally persist it
    // taskText: string
    // save: boolean - if true, save this addition to Local Storage
    function addTask(taskText, save = true) {
        if (!taskText || !taskText.trim()) return; // ignore empty

        // Create list item
        const li = document.createElement('li');
        li.textContent = taskText;
        li.setAttribute('role', 'listitem');
        li.dataset.task = taskText; // store original task text for removal lookup

        // Create Remove button
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute('aria-label', `Remove task: ${taskText}`);
        removeBtn.addEventListener('click', () => {
            // Remove from DOM
            taskList.removeChild(li);

            // Remove from Local Storage array
            const tasks = getStoredTasks();
            const index = tasks.indexOf(taskText);
            if (index > -1) {
                tasks.splice(index, 1);
                saveTasks(tasks);
            }
        });

        // Append button to li and li to list
        li.appendChild(document.createTextNode(' ')); // spacing
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Persist to Local Storage if requested
        if (save) {
            const tasks = getStoredTasks();
            tasks.push(taskText);
            saveTasks(tasks);
        }
    }

    // Handle form submission to add a new task
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const taskText = (input && input.value) ? input.value.trim() : '';

            if (!taskText) {
                // optional: basic feedback for empty input
                input.focus();
                return;
            }

            addTask(taskText, true);

            // clear input after adding
            if (input) input.value = '';
            if (input) input.focus();
        });
    }

    // Initial load
    loadTasks();
});
