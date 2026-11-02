// Updates the digital clock and calendar date.
function updateClock() {
    const currentDate = new Date();

    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // Determine whether the time is AM or PM.
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert from 24-hour time to 12-hour time.
    if (hours > 12) {
        hours = hours - 12;
    } else if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros to single-digit values.
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the time and date.
    const currentTime = hours + ":" + minutes + ":" + seconds + " " + session;
    const calendarDate = currentDate.toLocaleDateString();

    // Display the time and date on the dashboard.
    document.getElementById("clock-face").innerHTML = currentTime;
    document.getElementById("calendar-date").innerHTML = calendarDate;
}

// Display the time immediately when the page loads.
updateClock();

// Update the clock every second.
setInterval(updateClock, 1000);