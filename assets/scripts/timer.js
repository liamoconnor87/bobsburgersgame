// Defined time values.
let seconds = 0;
let minutes = 0;
let hours = 0;

// Defined display values. 
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

// Timer.
function stopWatch() {

	// Logic to determine when to increment next value.
	seconds++;

	// If seconds reaches 60 set minute to 1 and seconds back to 0.
	if (seconds / 60 === 1) {
		seconds = 0;
		minutes++;

		// If minutes reaches 60 set hour to 1 and minutes back to 0.
		if (minutes / 60 === 1) {
			minutes = 0;
			hours++;
		}
	}

	// Defined display value added if seconds/minutes/hours are only one digit.
	if (seconds < 10) {
		displaySeconds = "0" + seconds.toString();
	} else {
		displaySeconds = seconds;
	}

	if (minutes < 10) {
		displayMinutes = "0" + minutes.toString();
	} else {
		displayMinutes = minutes;
	}

	if (hours < 10) {
		displayHours = "0" + hours.toString();
	} else {
		displayHours = hours;
	}

	// Display updated time.
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
    // Display final time. 
    document.getElementById("final-time").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

// Defined value to hold setInterval() function - set to null so function doesnt run when page loads. 
let interval = null;

// Defined value to hold stopwatch status.
let status = "stopped";

function startTimer() {
	if (status === "stopped") {
        // Start the stopwatch by calling the setInterval() function.
        // Defines when stopWatch function will be called - 1000 milliseconds 
		interval = window.setInterval(stopWatch, 1000);
		status = "started";
	}
}

// Reset Game function.
function resetOk() {
    window.location.reload();
}

// Stops timer when all cards have been matched.
let matchedCard = document.getElementsByClassName("memory-card flip")

function stopTimer() {
    if (matchedCard.length == 16) {
        window.clearInterval(interval);

        gameComplete();
        playBob();

    }
}

// Timer starts on first card click.
$(".memory-card").click(function(){
    startTimer();
    stopTimer();
})

// Modal Game Complete.

function gameComplete() {
    $(".board-container").fadeIn(500);
    $(".complete-box").delay(1200).animate({
        opacity: '1',
    }, 1000)
}