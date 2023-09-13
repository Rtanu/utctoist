function convert() {
    const hours = parseInt(document.getElementById('hours').value);
    const minutes = parseInt(document.getElementById('minutes').value);

    // Validate input for hours (0-23) and minutes (0-59)
    if (isNaN(hours) || hours < 0 || hours > 23) {
        alert("Please enter a valid value for hours (0-23).");
        return;
    }

    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
        alert("Please enter a valid value for minutes (0-59).");
        return;
    }

    let convertedHours;
    let convertedMinutes;

    // Convert the time to IST
    if (hours < 19) {
        convertedHours = hours + 5;
    } else {
        convertedHours = hours - 19;
    }

    convertedMinutes = minutes + 30;
    if (convertedMinutes >= 60) {
        convertedMinutes -= 60;
        convertedHours++;
    }

    // Format the time with leading zeros
    const formattedHours = String(convertedHours).padStart(2, '0');
    const formattedMinutes = String(convertedMinutes).padStart(2, '0');

    // Display the result in IST
    document.getElementById('showtime').innerText = `Time in IST: ${formattedHours}:${formattedMinutes}`;
}