// Update the count down every 1 second
function updateTime() {

    // Set the date we're counting down to
    let target_date = new Date("Nov 30, 2023 23:59:59").getTime();

    // Get current date and time
    let current_date = new Date().getTime();
        
    // Find the difference between current and the target date
    let time_difference = target_date - current_date;
        
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(time_difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time_difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time_difference % (1000 * 60)) / 1000);
  
    // Output the result
    $('.days').text(days);
    $('.hours').text(hours);
    $('.minutes').text(minutes);
    $('.seconds').text(seconds);

    // If the count down is over, write some text 
    if (time_difference < 0) {

        let message = '<div class="timer-end-message"><p>Event has Completed</p></div>';

        // Clear all intervals to avoid repetation
        clearInterval(keep_track);

        $('.days').text('00');
        $('.hours').text('00');
        $('.minutes').text('00');
        $('.seconds').text('00');

        $('.timer').append(message);
    }
}

let keep_track = setInterval(updateTime, 1000);