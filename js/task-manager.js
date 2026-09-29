// Store the user's task list
let myTasks = [];

// Create the unordered list that will display the user's tasks
let taskList = document.createElement("ul");
taskList.id = "user-tasks";

// Add the unordered list to the task-list div
document.getElementById("task-list").appendChild(taskList);

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

// Add a new task when the Add Task button is clicked
document.getElementById("add-task").addEventListener("click", function(event)
{
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();

    // Get the task entered by the user
    let taskName = document.getElementById("task-name").value;

    // Store the task in the task array
    myTasks.push(taskName);

    // Create a list item for the new task
    let listItem = document.createElement("li");

    // Add the task text to the list item
    listItem.textContent = taskName;

    // Add the list item to the dynamically created unordered list
    taskList.appendChild(listItem);

    // Clear the input field after the task is added
    document.getElementById("task-name").value = "";
});