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