// Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {
  // Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Step 3: Create the addTask Function
  function addTask() {
    // Retrieve and trim task input value
    const taskText = taskInput.value.trim();

    // Validate that input is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // Step 4: Task Creation and Removal
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add functionality to remove task when button is clicked
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to the list item
    li.appendChild(removeButton);

    // Append list item to the unordered list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Step 5: Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Step 6: Invoke the addTask function on DOMContentLoaded
  // (optional initialization or startup logic)
  // For example, you could pre-populate with a sample task if desired.
  // addTask(); // Uncomment if you want to auto-run when page loads
});
