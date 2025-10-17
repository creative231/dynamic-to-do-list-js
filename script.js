// Wait for the HTML document to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // ==============================================
    // 1. Select DOM Elements
    // ==============================================
    const addButton = document.getElementById('add-task-btn'); // Add Task button
    const taskInput = document.getElementById('task-input');   // Input field
    const taskList = document.getElementById('task-list');     // Task list container

    // ==============================================
    // 2. Define the addTask Function
    // ==============================================
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // Check if input is empty
        if (taskText === "") {
            alert("Please enter a task."); // Alert user if empty
            return;
        }

        // ==============================================
        // 3. Create Task and Remove Button
        // ==============================================
        const li = document.createElement('li');   // Create list item
        li.textContent = taskText;                 // Set its text content

        const removeBtn = document.createElement('button'); // Create remove button
        removeBtn.textContent = "Remove";                   // Button text
        removeBtn.className = "remove-btn";                 // Add a class

        // Assign remove functionality
        removeBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // Append button to the list item, then to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field after adding the task
        taskInput.value = "";
    }

    // ==============================================
    // 4. Attach Event Listeners
    // ==============================================

    // Add task when button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ==============================================
    // 5. Invoke addTask on DOMContentLoaded (per instructions)
    // ==============================================
    addTask; // Ensures the function is defined and ready for use
});
