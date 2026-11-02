# Interactive Productivity Dashboard

This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.

## Completed Features
- [x] Add a metric conversion tool.
- [x] Integrate a task list with array storage.
- [x] Add a real-time digital clock and current date display.
- [x] Add a weekly task goal calculator.
- [x] Add task priorities, importance indicators, and completion tracking.
- [x] Add task editing and deletion functionality.

## Weekly Task Goals

The weekly task goal calculator multiplies the daily task goal by five workdays, then adds any weekly bonus tasks to calculate the total weekly goal.

## Weekly Task List

The Weekly Task List allows users to add, edit, complete, and delete tasks using JavaScript. Tasks are stored in an array of objects containing a unique ID, task name, priority, importance status, and completion status.

Users can assign High, Medium, or Low priority to each task and mark tasks as important. JavaScript applies different colors based on priority, highlights important tasks in red, and uses a strikethrough to identify completed tasks.

The application uses JavaScript DOM manipulation to dynamically create task list items and buttons. Users can mark tasks complete or undo completion, edit task names, delete individual tasks, or clear the entire list.

Whenever a task is added, modified, or deleted, the updated task array is logged to the browser console using `JSON.stringify()`.

## Imperial/Metric Converter

The Imperial/Metric Converter allows a user to enter a numeric value and select a conversion type using inch, foot, yard, mile, centimeter, meter, or kilometer. The converter will perform the calculation and then display the result to two decimal places.

### Logic and Pseudocode

BEGIN
    INPUT numeric value
    INPUT conversion choice

    IF conversion choice = "in to cm" THEN
        SET result = numeric value * 2.54
    ELSE IF conversion choice = "ft to cm" THEN
        SET result = numeric value * 30.48
    ELSE IF conversion choice = "yd to m" THEN
        SET result = numeric value * 0.91
    ELSE IF conversion choice = "mi to km" THEN
        SET result = numeric value * 1.61
    ELSE IF conversion choice = "cm to in" THEN
        SET result = numeric value * 0.39
    ELSE IF conversion choice = "cm to ft" THEN
        SET result = numeric value * 0.0328
    ELSE IF conversion choice = "m to yd" THEN
        SET result = numeric value * 1.09
    ELSE IF conversion choice = "km to mi" THEN
        SET result = numeric value * 0.62

    OUTPUT result
END

## Magic Eight Ball

The Magic Eight Ball allows a user to enter a yes/no question and click the Eight Ball image to receive a random answer. The game uses an array to store possible answers and an event listener to respond when the Eight Ball is clicked. If the question field is empty, an alert asks the user to enter a question. The reset button clears the question and hides the previous answer.

## Digital Clock and Date

The Digital Clock displays the current local time and calendar date on the dashboard. The clock updates automatically every second without requiring the user to refresh the page.

The application uses the JavaScript `Date` object with `getHours()`, `getMinutes()`, and `getSeconds()` to retrieve the current time. The `toLocaleDateString()` method retrieves and formats the current date.

The clock automatically converts JavaScript's 24-hour time values into a 12-hour display with AM or PM. Users do not need to select a time format.

The `updateClock()` function uses `innerHTML` to display the formatted time and date on the webpage. The `setInterval()` method calls the function every 1000 milliseconds to keep the clock updated. The function is also called when the page first loads so the time appears immediately.

The clock uses a separate JavaScript file (`js/digital-clock.js`) and CSS stylesheet (`css/digital-clock.css`) to keep the code organized.