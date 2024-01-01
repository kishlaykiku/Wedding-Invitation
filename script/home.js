$(document).ready(function () {

    // Store image URLs
    let images_mobile = ['./images/home/home1m.jpg', './images/home/home2m.jpg', './images/home/home3m.jpg']
    let images_desktop = ['./images/home/home1p.jpg', './images/home/home2p.jpg', './images/home/home3p.jpg']
    let curr_index = 0;


    // Preload all images
    function preloadMobileImages(images_mobile) {
        let img1;
        for (var i = 0; i < images_mobile.length; i++) {
            img1 = new Image();
            img1.src = images_mobile[i];
        }
    }
    function preloadDesktopImages(images_desktop) {
        let img2;
        for (var i = 0; i < images_desktop.length; i++) {
            img2 = new Image();
            img2.src = images_desktop[i];
        }
    }
    preloadMobileImages(images_mobile);
    preloadDesktopImages(images_desktop);

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