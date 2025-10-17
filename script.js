// Wait for the entire HTML document to load before executing the script
document.addEventListener('DOMContentLoaded', function () {

  // --- Step 1: Select DOM Elements ---
  // Select the "Add Task" button
  const addButton = document.getElementById('add-task');

  // Select the task input field
  const taskInput = document.getElementById('task-input');

  // Select the unordered list where tasks will appear
  const taskList = document.getElementById('task-list');

  // --- Step 2: Define the addTask Function ---
  function addTask() {
    // Get the input value and remove extra spaces
    const taskText = taskInput.value.trim();

    // Check if the input is empty
    if (taskText === "") {
      alert("Please enter a task."); // Notify the user if input is empty
      return; // Stop the function from continuing
    }

    // Create a new list item (li)
    const li = document.createElement('li');
    li.textContent = taskText; // Set the list item text to the entered task

    // Create a "Remove" button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Assign an onclick event to the remove button
    removeBtn.onclick = function () {
      taskList.removeChild(li); // Remove this specific task from the list
    };

    // Append the remove button to the task item
    li.appendChild(removeBtn);

    // Add the task item (li) to the task list (ul)
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // --- Step 3: Attach Event Listeners ---
  // When the "Add Task" button is clicked, call the addTask function
  addButton.addEventListener('click', addTask);

  // Allow user to add a task by pressing the "Enter" key
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // --- Step 4: Optional Initialization ---
  // You can call addTask() here if you want to pre-load or test on load
  // addTask();
});
