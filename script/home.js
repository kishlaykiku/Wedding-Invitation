$(document).ready(function () {

    // Store image URLs
    let images_mobile = ['./images/home/home1m.jpg', './images/home/home2m.jpg', './images/home/home3m.jpg']
    let images_desktop = ['./images/home/home1p.jpg', './images/home/home2p.jpg', './images/home/home3p.jpg']
    let curr_index = 0;

    // Change the background every {specified time}
    function cycleBack() {

        let width = screen.width;

        if(width < 1101) {
            $('.home-section').css('background-image', `url(${images_mobile[curr_index]})`);
            curr_index = (curr_index + 1) % images_mobile.length;
        }
        else {
            $('.home-section').css('background-image', `url(${images_desktop[curr_index]})`);
            curr_index = (curr_index + 1) % images_desktop.length;
        }
    }

    setInterval(cycleBack, 3500);
});