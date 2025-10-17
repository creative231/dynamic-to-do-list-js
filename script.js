// Wait for the entire HTML document to load before running the script
document.addEventListener('DOMContentLoaded', function () {

  // --- Select DOM Elements ---
  // Select the "Add Task" button and store it in a constant named addButton
  const addButton = document.getElementById('add-task');

  // Select the input field for user task entry
  const taskInput = document.getElementById('task-input');

  // Select the unordered list where tasks will be displayed
  const taskList = document.getElementById('task-list');

  // --- Create the addTask Function ---
  // This function handles adding a new task to the list
  function addTask() {
    // Get the input value and remove extra spaces
    const taskText = taskInput.value.trim();

    // Check if input is empty
    if (taskText === "") {
      alert("Please enter a task."); // Prompt user to enter a task
      return; // Exit function if input is empty
    }

    // Create a new list item (li) for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a "Remove" button for the task
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.className = 'remove-btn';

    // Assign an event to remove the task when the button is clicked
    removeBtn.onclick = function () {
      taskList.removeChild(li);
    };

    // Append the remove button to the task item
    li.appendChild(removeBtn);

    // Append the task item (li) to the unordered list (ul)
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
  }

  // --- Attach Event Listeners ---
  // When the "Add Task" button is clicked, call addTask
  addButton.addEventListener('click', addTask);

  // Allow user to add task by pressing Enter key in the input field
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optional: Invoke addTask on DOMContentLoaded (only if you want to pre-load data or test behavior)
  // addTask(); // Uncomment this line if you want it to run once on page load

});
