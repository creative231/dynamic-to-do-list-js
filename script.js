// Step 1: Run the script only after the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task'); // "Add Task" button
  const taskInput = document.getElementById('task-input'); // Input field for task text
  const taskList = document.getElementById('task-list'); // Unordered list to display tasks

  // Step 3: Define the addTask function
  function addTask() {
    // Retrieve and trim the input value
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === '') {
      alert('Please enter a task.'); // Prompt user if input is empty
      return; // Stop execution if no text entered
    }

    // Step 4: Create a new list item for the task
    const li = document.createElement('li');
    li.textContent = taskText; // Set task text

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn'; // Assign class for styling

    // When the remove button is clicked, remove the corresponding task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Step 5: Add Event Listeners
  // When the "Add Task" button is clicked
  addButton.addEventListener('click', addTask);

  // Allow adding a task by pressing the Enter key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Step 6: Optionally invoke addTask on DOMContentLoaded
  // This can be used to run setup logic when the page loads.
  // addTask(); // Uncomment if you want to pre-load a sample task.
});
