// Store the user's tasks as an array of objects
let myTasks = [];

// Reference the unordered list already created in the HTML
let taskList = document.getElementById("user-tasks");

// Keep track of unique task IDs
let nextTaskId = 1;

function weeklyGoal(userName, dailyGoal, bonusTasks) 
{

    // Calculate weekly goal based on number of workdays (5) per week
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Create the message to display the user's total weekly goal
    let output = "User: " + userName + "<br>" +
        "Total Weekly Goal: " + totalGoal;

    // Display the weekly goal message on the web page
    document.getElementById("goal-message").innerHTML = output;
}

// Run the weekly goal calculator when the button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event)
{
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the user's name from the form
    let userName = document.getElementById("user-name").value;

    // Get the user's daily task goal from the form
    let dailyGoal = Number(document.getElementById("daily-goal").value);

    // Get the user's weekly bonus tasks from the form
    let bonusTasks = Number(document.getElementById("bonus-tasks").value);

    // Call the weeklyGoal function using the user's input values
    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// Add a new task when the task form is submitted
document.getElementById("task-form").addEventListener("submit", function(event)
{
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the task information entered by the user
    let taskName = document.getElementById("task-name").value.trim();
    let taskPriority = document.getElementById("task-priority").value;
    let taskImportant = document.getElementById("task-important").checked;

    // Do not add an empty task
    if (taskName === "") {
        return;
    }

    // Create a task object using object literal notation
    let newTask = {
        id: nextTaskId,
        name: taskName,
        priority: taskPriority,
        isImportant: taskImportant,
        isCompleted: false
    };

    // Add the task object to the array
    myTasks.push(newTask);
    nextTaskId++;

    
    // Create a list item for the task
    let listItem = document.createElement("li");
    listItem.textContent = newTask.name + " (" + newTask.priority + ") ";

    // Apply task styling based on importance and priority
    if (newTask.isImportant) {
        listItem.style.color = "red";
    }
    else if (newTask.priority === "High") {
        listItem.style.color = "darkorange";
    }
    else if (newTask.priority === "Medium") {
        listItem.style.color = "blue";
    }
    else {
        listItem.style.color = "green";
    }

    // Create a button to mark the task complete
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.type = "button";

    // Update the task object and appearance when clicked
    completeButton.addEventListener("click", function() {
        newTask.isCompleted = !newTask.isCompleted;

        if (newTask.isCompleted) {
            listItem.style.textDecoration = "line-through";
            completeButton.textContent = "Undo";
        }
        else {
            listItem.style.textDecoration = "none";
            completeButton.textContent = "Complete";
        }

        // Log the updated task list
        console.log(JSON.stringify(myTasks));
    });


    // Create a button to delete an individual task
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.type = "button";

    // Remove the task from the array and webpage
    deleteButton.addEventListener("click", function() {
        myTasks = myTasks.filter(function(task) {
            return task.id !== newTask.id;
        });

        listItem.remove();

        // Log the updated task list
        console.log(JSON.stringify(myTasks));
    });


    // Create a button to edit an individual task
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.type = "button";

    // Allow the user to change the task name
    editButton.addEventListener("click", function() {
        let updatedName = prompt("Edit task name:", newTask.name);

        // Update the task if the user enters a valid name
        if (updatedName !== null && updatedName.trim() !== "") {
            newTask.name = updatedName.trim();

            // Update the task text without removing its buttons
            listItem.firstChild.textContent =
                newTask.name + " (" + newTask.priority + ") ";

            // Log the updated task list
            console.log(JSON.stringify(myTasks));
        }
    });


    // Add the buttons and task to the webpage
    listItem.appendChild(completeButton);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem); 



    // Log the updated task list as JSON
    console.log(JSON.stringify(myTasks));

    // Clear the form for the next task
    document.getElementById("task-form").reset();
});

    
// Delete all tasks when the Delete List button is clicked
document.getElementById("delete-list").addEventListener("click", function()
{
    // Empty the array of task objects
    myTasks = [];

    // Remove all task list items from the webpage
    taskList.replaceChildren();

    // Log the updated empty task list
    console.log(JSON.stringify(myTasks));
});
