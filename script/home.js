$(document).ready(function () {
    let images = ['../images/home/home1.jpg', '../images/home/home2.jpg', '../images/home/home3.jpg']
    let curr_index = 0;


    function preloadImages(images) {
        let img;
        for (var i = 0; i < images.length; i++) {
            img = new Image();
            img.src = images[i];
        }
    }
    preloadImages(images);


    function cycleBack() {
        $('.home-section').css('background-image', 'url(' + images[curr_index] + ')');

        curr_index = (curr_index + 1) % images.length;
    }

    setInterval(cycleBack, 3500);
});