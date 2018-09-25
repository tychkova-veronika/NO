let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    slidesPerView: calculateSlidesPerView(),
    spaceBetween: 0,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }

});


$(window).bind("orientationchange", configureSwiper);

let menu = $('.sidenav');
menu.bind("touchmove",open_close_menu);
menu.bind("click",open_close_menu);
$('.toggler').bind("click",open_close_menu);


function configureSwiper() {
    mySwiper.params.slidesPerView = calculateSlidesPerView();
}

function calculateSlidesPerView() {
    let landscape = Math.abs(window.orientation) === 90;
    if (landscape) {
        return 2;
    } else {
        return 1;
    }
}

function open_close_menu() {
    let sideNav = $('#mySidenav');
    if (sideNav.width() !== 0) {
        sideNav.width("0px");
    } else {
        sideNav.width("100vw");
    }
}
