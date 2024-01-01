$(document).ready(function () {

    // Store image URLs
    let images = ['/images/home/home1.jpg', '/images/home/home2.jpg', '/images/home/home3.jpg']
    let curr_index = 0;

    // Preload all images
    function preloadImages(images) {
        let img;
        for (var i = 0; i < images.length; i++) {
            img = new Image();
            img.src = images[i];
        }
    }
    preloadImages(images);

    // Change the background every {specified time}
    function cycleBack() {
        $('.home-section').css('background-image', `url(${images[curr_index]})`);

        curr_index = (curr_index + 1) % images.length;
    }

    setInterval(cycleBack, 3500);
});